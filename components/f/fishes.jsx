import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epiz7hbmm.css';
import '../../css/r/rd82_gbdw.css';
import '../../css/g/gphe89_oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="epiz7hbmm"/><path class="rd82_gbdw"/><path class="gphe89_oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:fishes"} {...others} />);
}

export default Component;
