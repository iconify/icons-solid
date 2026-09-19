import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy9yyucwb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zy9yyucwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pan-horizontal"} {...others} />);
}

export default Component;
