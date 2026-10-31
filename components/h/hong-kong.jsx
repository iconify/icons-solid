import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dki-1w-8i.css';
import '../../css/s/s1c8xvkzj.css';
import '../../css/i/iq_z596tt.css';
import '../../css/y/y1n_k57xm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="dki-1w-8i"/><path class="s1c8xvkzj"/><path class="iq_z596tt"/><path class="y1n_k57xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:hong-kong"} {...others} />);
}

export default Component;
