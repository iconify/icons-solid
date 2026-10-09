import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koyov2bfs.css';
import '../../css/a/aez0dwbdt.css';
import '../../css/k/keapg2bjm.css';
import '../../css/b/b9s0npblv.css';
import '../../css/u/uin4slb1r.css';
import '../../css/y/yyg0fywys.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="koyov2bfs"/><path class="aez0dwbdt"/><path class="keapg2bjm"/><path class="b9s0npblv"/><path class="uin4slb1r"/><path class="yyg0fywys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-bike-charging-20-bold"} {...others} />);
}

export default Component;
