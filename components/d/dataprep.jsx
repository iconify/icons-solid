import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj8wlmhgm.css';
import '../../css/x/xpk_g7bnh.css';
import '../../css/w/wgy-zbb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj8wlmhgm"/><path class="xpk_g7bnh"/><path class="wgy-zbb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:dataprep"} {...others} />);
}

export default Component;
