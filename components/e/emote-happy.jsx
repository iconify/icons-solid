import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be4ocjgyv.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="be4ocjgyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:emote-happy"} {...others} />);
}

export default Component;
