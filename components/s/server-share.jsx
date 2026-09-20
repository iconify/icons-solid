import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n_4stibmn.css';
import '../../css/b/bd6zcf_xv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n_4stibmn"/><path class="bd6zcf_xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:server-share"} {...others} />);
}

export default Component;
