import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy99ozzcb.css';

const viewBox = {"width":1824,"height":1472};
const content = `<path class="oy99ozzcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:volume-times"} {...others} />);
}

export default Component;
