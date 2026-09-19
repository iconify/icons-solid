import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdgikwjle.css';
import '../../css/c/certo-bxv.css';
import '../../css/j/j8y488bff.css';
import '../../css/w/w9-2og5ix.css';
import '../../css/x/xydsivb4a.css';
import '../../css/h/h2r_jvb2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qdgikwjle"/><path class="certo-bxv"/><path class="j8y488bff"/><path class="w9-2og5ix"/><path class="xydsivb4a"/><path class="h2r_jvb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sweatsplash"} {...others} />);
}

export default Component;
