import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/u/u3atvniwf.css';
import '../../css/k/kz5bt151v.css';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yn6pobgao.css';
import '../../css/l/ljw-qgmxc.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGpghDMeGS" width="18" height="20" x="3" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="u3atvniwf"/><path class="kz5bt151v"/></mask><g class="pr52f_b5y"><path mask="url(#SVGpghDMeGS)" class="yn6pobgao"/><path class="ljw-qgmxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chield-check"} {...others} />);
}

export default Component;
