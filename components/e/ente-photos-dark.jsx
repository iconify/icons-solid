import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2159gbjp.css';
import '../../css/f/fro_cac9v.css';
import '../../css/j/j-esetb3v.css';
import '../../css/p/p098uujwe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s2159gbjp"/><path class="fro_cac9v"/><path class="j-esetb3v"/><path class="p098uujwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-photos-dark"} {...others} />);
}

export default Component;
