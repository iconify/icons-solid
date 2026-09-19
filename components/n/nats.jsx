import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skwvgiyqj.css';
import '../../css/g/gnxlviovw.css';
import '../../css/z/zuksgrtbn.css';
import '../../css/t/t5w0wyb4c.css';
import '../../css/x/xht0c85vp.css';
import '../../css/z/zkvel22sc.css';
import '../../css/o/ob_i4538a.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="skwvgiyqj"/><path class="gnxlviovw"/><path class="zuksgrtbn"/><path class="t5w0wyb4c"/><path class="xht0c85vp"/><path class="zkvel22sc"/><path class="ob_i4538a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nats"} {...others} />);
}

export default Component;
