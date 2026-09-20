import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2eefp2bq.css';
import '../../css/l/lcg1blgbk.css';
import '../../css/n/nqzoejbzx.css';
import '../../css/l/lq1_bi8pr.css';
import '../../css/u/ucbia8bsu.css';
import '../../css/y/y593fqirs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w2eefp2bq"/><path class="lcg1blgbk"/><path class="nqzoejbzx"/><path class="lq1_bi8pr"/><path class="ucbia8bsu"/><path class="y593fqirs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tags-settings"} {...others} />);
}

export default Component;
