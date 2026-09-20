import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq6vb6osp.css';
import '../../css/c/c9d3lmnlm.css';
import '../../css/o/ogglx998l.css';
import '../../css/r/rws2s6fhn.css';
import '../../css/f/fy9-zbixp.css';
import '../../css/n/n6wf1fbez.css';
import '../../css/y/yc8xttbsv.css';
import '../../css/o/o4pvgottj.css';
import '../../css/m/m8prdobpq.css';
import '../../css/k/kg48ts28v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gq6vb6osp"/><path class="c9d3lmnlm"/><path class="ogglx998l"/><path class="rws2s6fhn"/><path class="fy9-zbixp"/><path class="n6wf1fbez"/><path class="yc8xttbsv"/><path class="o4pvgottj"/><path class="m8prdobpq"/><path class="kg48ts28v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mailcow"} {...others} />);
}

export default Component;
