import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzc-u03if.css';
import '../../css/a/a7qi5pmcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzc-u03if"/><path class="a7qi5pmcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-heart-bold-duotone"} {...others} />);
}

export default Component;
