import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kqv4z2bpq.css';
import '../../css/m/mo8p5dbdf.css';
import '../../css/z/zkce70bzg.css';
import '../../css/s/sl0bk4m9t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="kqv4z2bpq"/><path class="mo8p5dbdf"/><path class="zkce70bzg"/><path class="sl0bk4m9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:desk-lamp"} {...others} />);
}

export default Component;
