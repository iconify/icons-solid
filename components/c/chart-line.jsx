import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glt59q_3m.css';
import '../../css/x/xeppxb2nq.css';
import '../../css/a/a-x5d9nvy.css';
import '../../css/d/d-pf68bil.css';
import '../../css/u/u0kjhd07f.css';
import '../../css/q/qkoxnqbno.css';
import '../../css/z/zq_d9zlaj.css';
import '../../css/s/sx2-b47vw.css';
import '../../css/j/jy6lx7bbd.css';
import '../../css/r/r530uxpbd.css';
import '../../css/j/j57zjhzby.css';
import '../../css/h/h9h5npbta.css';
import '../../css/d/dlt5tlbqo.css';
import '../../css/k/kdsko9b3v.css';
import '../../css/m/ml2fd1bpz.css';
import '../../css/q/qb3qncbls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glt59q_3m wm-shadow"/><path class="wm-k xeppxb2nq"/><path class="a-x5d9nvy wm-k"/><path class="d-pf68bil wm-k"/><path class="u0kjhd07f wm-k"/><path class="qkoxnqbno wm-shine"/><path class="wm-a zq_d9zlaj"/><path class="sx2-b47vw wm-a"/><path class="jy6lx7bbd wm-a"/><path class="r530uxpbd wm-a"/><path class="j57zjhzby wm-a"/><path class="h9h5npbta wm-a"/><path class="dlt5tlbqo wm-a"/><path class="kdsko9b3v wm-a"/><path class="ml2fd1bpz wm-a"/><path class="qb3qncbls wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chart-line"} {...others} />);
}

export default Component;
