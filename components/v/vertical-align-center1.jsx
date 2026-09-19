import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj4dh4bmq.css';
import '../../css/g/gu_lkpbuk.css';
import '../../css/i/in2gpja4r.css';
import '../../css/o/obrdwjn5o.css';
import '../../css/l/lhaihpbco.css';
import '../../css/k/k6vx3z9rb.css';
import '../../css/e/e4l3gobud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj4dh4bmq"/><path class="gu_lkpbuk"/><path class="in2gpja4r"/><path class="obrdwjn5o"/><path class="lhaihpbco"/><path class="k6vx3z9rb"/><path class="e4l3gobud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:vertical-align-center1"} {...others} />);
}

export default Component;
