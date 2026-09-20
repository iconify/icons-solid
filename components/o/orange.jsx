import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/d/dtwnl1b8w.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_hygxb8p.css';
import '../../css/k/kycczh5hk.css';
import '../../css/b/bkyqy-baq.css';
import '../../css/l/lvdwpt53z.css';
import '../../css/o/oa7jysr2p.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGXH1B5brI" class="n1mjunbsu"><path class="dtwnl1b8w"/></mask><g class="ft5dv1b6b"><circle class="o_hygxb8p"/><path mask="url(#SVGXH1B5brI)" class="kycczh5hk"/><circle class="bkyqy-baq"/><circle class="lvdwpt53z"/><circle class="oa7jysr2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:orange"} {...others} />);
}

export default Component;
