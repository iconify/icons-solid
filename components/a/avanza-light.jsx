import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1sukl-mj.css';

const viewBox = {"width":1549,"height":1881};
const content = `<path class="f1sukl-mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:avanza-light"} {...others} />);
}

export default Component;
