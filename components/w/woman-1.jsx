import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1x_7uf1f.css';
import '../../css/x/xiqsit0nh.css';
import '../../css/d/d8dn2_bce.css';
import '../../css/e/ebzihqbyf.css';
import '../../css/g/glhh0tbao.css';
import '../../css/j/j4rmxk7av.css';
import '../../css/i/id9rbab6k.css';
import '../../css/n/n0zyy8mzj.css';
import '../../css/c/cvolilg4j.css';
import '../../css/m/mljb44bzg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o1x_7uf1f"/><path class="xiqsit0nh"/><path class="d8dn2_bce"/><path class="ebzihqbyf"/><path class="glhh0tbao"/><path class="j4rmxk7av"/><path class="id9rbab6k"/><path class="n0zyy8mzj"/><path class="cvolilg4j"/><path class="mljb44bzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:woman-1"} {...others} />);
}

export default Component;
