import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imzgcacxf.css';
import '../../css/n/nl6s4narq.css';
import '../../css/t/tric_gbwv.css';
import '../../css/n/n2itj-fai.css';
import '../../css/n/nf90gmfuz.css';
import '../../css/g/gtf95lbov.css';
import '../../css/a/aa1k1tb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="imzgcacxf"/><path class="nl6s4narq"/><path class="tric_gbwv"/><path class="n2itj-fai"/><path class="nf90gmfuz"/><path class="gtf95lbov"/><path class="aa1k1tb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-copyright-tm"} {...others} />);
}

export default Component;
