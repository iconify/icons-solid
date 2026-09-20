import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcfzupb_o.css';
import '../../css/w/wzh-x6b-n.css';
import '../../css/o/opthrqb6k.css';
import '../../css/o/onfb7ibkn.css';
import '../../css/x/xsxvkklbp.css';
import '../../css/o/ocylx5uqi.css';
import '../../css/p/p5mty8smc.css';
import '../../css/f/ffu5fq3ii.css';
import '../../css/n/n4jnf590z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bcfzupb_o"/><path class="wzh-x6b-n"/><path class="opthrqb6k"/><path class="onfb7ibkn"/><path class="xsxvkklbp"/><path class="ocylx5uqi"/><path class="p5mty8smc"/><path class="ffu5fq3ii"/><path class="n4jnf590z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tools-kitchen-scale"} {...others} />);
}

export default Component;
