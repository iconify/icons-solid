import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-uz5nbgx.css';
import '../../css/x/xifkqvb3u.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w-uz5nbgx"/><path class="xifkqvb3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbkan"} {...others} />);
}

export default Component;
