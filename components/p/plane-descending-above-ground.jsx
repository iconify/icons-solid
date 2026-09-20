import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqzszg6lw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qqzszg6lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plane-descending-above-ground"} {...others} />);
}

export default Component;
