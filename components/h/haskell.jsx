import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1i5j5zjy.css';
import '../../css/t/tsra2_hxh.css';
import '../../css/n/n6dcl9bls.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h1i5j5zjy"/><path class="tsra2_hxh"/><path class="n6dcl9bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:haskell"} {...others} />);
}

export default Component;
