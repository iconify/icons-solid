import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejpxn4brd.css';
import '../../css/y/yyj2mtbvg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ejpxn4brd"/><path class="yyj2mtbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-module-cube-code-module-programming-plugin"} {...others} />);
}

export default Component;
