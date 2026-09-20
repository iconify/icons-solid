import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zv5_28bpu.css';
import '../../css/p/psuj1nblp.css';
import '../../css/f/fq3jvebqs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zv5_28bpu"/><rect transform="rotate(-45 7.499 4.294)" class="psuj1nblp"/><path class="fq3jvebqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:legal-justice-hammer-hammer-work-legal-mallet-office-company-gavel-justice-judge-arbitration-court"} {...others} />);
}

export default Component;
