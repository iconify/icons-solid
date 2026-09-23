import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cym2lacyw.css';
import '../../css/g/gemcfhb7v.css';
import '../../css/q/qjf38o8dr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cym2lacyw"/><path class="gemcfhb7v"/><path class="qjf38o8dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:silo-media-server-light"} {...others} />);
}

export default Component;
