import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l62nsnq9g.css';
import '../../css/g/ges9eguks.css';
import '../../css/i/iqybl_nmp.css';
import '../../css/l/lmumyibss.css';
import '../../css/k/kiq34vxjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l62nsnq9g"/><circle class="ges9eguks"/><circle class="iqybl_nmp"/><circle class="lmumyibss"/><path class="kiq34vxjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-gbt-dc"} {...others} />);
}

export default Component;
