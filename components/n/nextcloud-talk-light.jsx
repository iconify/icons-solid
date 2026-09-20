import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5t43yc4z.css';
import '../../css/u/ucpf2webs.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="v5t43yc4z"/><path clip-rule="evenodd" class="ucpf2webs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-talk-light"} {...others} />);
}

export default Component;
