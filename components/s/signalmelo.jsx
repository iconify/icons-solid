import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6v0dfk4x.css';
import '../../css/j/jlwljb5kc.css';
import '../../css/l/lnwuelbgi.css';
import '../../css/j/j6hmgkbja.css';

const viewBox = {"width":192,"height":192};
const content = `<path class="j6v0dfk4x"/><path class="jlwljb5kc"/><path class="lnwuelbgi"/><path class="j6hmgkbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:signalmelo"} {...others} />);
}

export default Component;
