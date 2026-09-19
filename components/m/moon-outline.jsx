import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbnj-ebyu.css';
import '../../css/r/rugsosn5v.css';
import '../../css/j/j5ys1knya.css';
import '../../css/n/n_c732bco.css';
import '../../css/t/tc01s7q8p.css';
import '../../css/c/cou58qtmt.css';
import '../../css/n/nxvcoh25b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pbnj-ebyu"/><path class="rugsosn5v"/><path clip-rule="evenodd" class="j5ys1knya"/><path class="n_c732bco"/><path clip-rule="evenodd" class="tc01s7q8p"/><path class="cou58qtmt"/><path clip-rule="evenodd" class="nxvcoh25b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:moon-outline"} {...others} />);
}

export default Component;
