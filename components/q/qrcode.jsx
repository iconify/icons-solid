import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbyvh60wm.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/d/da976vbvv.css';
import '../../css/f/fjfvtrkwl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGczrnudJR" class="jbyvh60wm"/></defs><g class="ft5dv1b6b"><use href="#SVGczrnudJR"/><g class="av3m8fbrw"><use href="#SVGczrnudJR"/><path class="da976vbvv"/></g><path class="fjfvtrkwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:qrcode"} {...others} />);
}

export default Component;
