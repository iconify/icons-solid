import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/psiglkazx.css';
import '../../css/j/jvqvxcckb.css';
import '../../css/x/x779ubc8b.css';
import '../../css/m/mx_sis13y.css';
import '../../css/y/ynai27lav.css';
import '../../css/g/g194wjqvo.css';
import '../../css/r/r2x1b_pnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><g transform="translate(5 3)" class="psiglkazx"><path class="jvqvxcckb"/><path class="x779ubc8b"/><circle transform="matrix(1 0 0 -1 0 33)" class="mx_sis13y"/><circle transform="matrix(1 0 0 -1 0 15)" class="ynai27lav"/><circle class="g194wjqvo"/></g><path class="r2x1b_pnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:document-ai"} {...others} />);
}

export default Component;
