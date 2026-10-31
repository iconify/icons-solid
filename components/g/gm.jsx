import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6u564dvt.css';
import '../../css/d/dl_aixy-o.css';
import '../../css/n/nf-55objw.css';
import '../../css/c/c6hcid1zh.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="a6u564dvt"/><path class="dl_aixy-o"/><path class="nf-55objw"/><path class="c6hcid1zh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gm"} {...others} />);
}

export default Component;
