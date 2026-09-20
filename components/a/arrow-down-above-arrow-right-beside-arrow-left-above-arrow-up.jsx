import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk-do6bac.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fk-do6bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-down-above-arrow-right-beside-arrow-left-above-arrow-up"} {...others} />);
}

export default Component;
