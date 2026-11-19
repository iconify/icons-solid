import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/c/ck5-jipqk.css';
import '../../css/t/t1qs0yb0r.css';
import '../../css/f/fwufnxlre.css';
import '../../css/w/wguqkdb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="ck5-jipqk"/><path class="t1qs0yb0r"/><path class="fwufnxlre"/><path class="wguqkdb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-droplet"} {...others} />);
}

export default Component;
