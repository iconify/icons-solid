import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qct3ecj4h.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8teb1b0x.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/u/u_9x4sbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGqxFQMdcl" class="qct3ecj4h"/></defs><g class="ft5dv1b6b"><path class="g8teb1b0x"/><use href="#SVGqxFQMdcl"/><use href="#SVGqxFQMdcl" class="p_3zmsvya"/><path class="u_9x4sbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:candy"} {...others} />);
}

export default Component;
