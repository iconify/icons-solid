import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l19lwdbaq.css';
import '../../css/n/nevij009o.css';
import '../../css/x/xkad-cchf.css';
import '../../css/v/vh7o13bvx.css';
import '../../css/e/ey4w976id.css';
import '../../css/e/epo1-47gl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l19lwdbaq"/><path class="nevij009o"/><path class="xkad-cchf"/><path class="vh7o13bvx"/><path class="ey4w976id"/><path class="epo1-47gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:package"} {...others} />);
}

export default Component;
