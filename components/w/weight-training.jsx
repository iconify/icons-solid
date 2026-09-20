import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea9eg_obi.css';
import '../../css/u/ukjymo41a.css';
import '../../css/l/lmf-ioxuc.css';
import '../../css/l/l-efajjgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ea9eg_obi"/><path class="ukjymo41a"/><path class="lmf-ioxuc"/><path class="l-efajjgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:weight-training"} {...others} />);
}

export default Component;
