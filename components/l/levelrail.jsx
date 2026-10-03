import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffpz238lq.css';
import '../../css/b/bj_k-fngv.css';
import '../../css/m/m1jzmcc2r.css';

const viewBox = {"width":256,"height":256};
const content = `<rect class="ffpz238lq"/><rect class="bj_k-fngv"/><rect class="m1jzmcc2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:levelrail"} {...others} />);
}

export default Component;
