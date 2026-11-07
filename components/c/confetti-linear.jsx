import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/f/f4knhacco.css';
import '../../css/i/iz3lcib7g.css';
import '../../css/o/o9qiojmml.css';
import '../../css/z/zfl_jac2j.css';
import '../../css/u/un7ro4b8f.css';
import '../../css/y/ynbr-cmaf.css';
import '../../css/d/dsimmlbll.css';
import '../../css/d/d-_n9be_g.css';
import '../../css/l/l4kdp-b_l.css';
import '../../css/k/kkbn8ggrm.css';
import '../../css/g/gswofgbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="f4knhacco"/><path class="iz3lcib7g"/><path class="o9qiojmml"/><path class="zfl_jac2j"/><path class="un7ro4b8f"/><path class="ynbr-cmaf"/><path class="dsimmlbll"/><path class="d-_n9be_g"/><path class="l4kdp-b_l"/><path class="kkbn8ggrm"/><path class="gswofgbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confetti-linear"} {...others} />);
}

export default Component;
