import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8ne5bsn.css';
import '../../css/v/vp5lb0bdv.css';
import '../../css/k/kfewyxs4v.css';
import '../../css/e/en4jdxhqu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="om8ne5bsn"/><path class="vp5lb0bdv"/><path class="kfewyxs4v"/><path class="en4jdxhqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:medical-files-report-history"} {...others} />);
}

export default Component;
