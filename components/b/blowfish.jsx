import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xrxnmobzp.css';
import '../../css/o/ofes0qbjo.css';
import '../../css/m/mhkyp_96e.css';
import '../../css/u/usdog0b1i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xrxnmobzp"/><path class="ofes0qbjo"/><path class="mhkyp_96e"/><path class="usdog0b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:blowfish"} {...others} />);
}

export default Component;
