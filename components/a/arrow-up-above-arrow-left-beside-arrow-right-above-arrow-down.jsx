import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqemtkn4p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oqemtkn4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-up-above-arrow-left-beside-arrow-right-above-arrow-down"} {...others} />);
}

export default Component;
