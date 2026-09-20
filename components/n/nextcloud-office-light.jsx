import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df2i0cbrv.css';
import '../../css/m/m0c34ebvb.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="df2i0cbrv"/><path clip-rule="evenodd" class="m0c34ebvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-office-light"} {...others} />);
}

export default Component;
