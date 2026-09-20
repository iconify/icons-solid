import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/edm2av0vf.css';
import '../../css/z/zsa2kdbdw.css';
import '../../css/d/d76hi_bnp.css';
import '../../css/i/iumob5e9e.css';
import '../../css/z/z25lovqsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="edm2av0vf"/><path class="zsa2kdbdw"/><path class="d76hi_bnp"/><path class="iumob5e9e"/><path class="z25lovqsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-smile-linear"} {...others} />);
}

export default Component;
