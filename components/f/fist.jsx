import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/evjwcxf7b.css';
import '../../css/y/y9gdixaoj.css';
import '../../css/a/ald955wbx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="evjwcxf7b"/><path class="y9gdixaoj"/><path class="ald955wbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:fist"} {...others} />);
}

export default Component;
