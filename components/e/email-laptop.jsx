import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lql41-bmx.css';
import '../../css/n/nf-rm4z2q.css';
import '../../css/c/c3c_dlb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="lql41-bmx"/><path class="nf-rm4z2q"/><path class="c3c_dlb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:email-laptop"} {...others} />);
}

export default Component;
