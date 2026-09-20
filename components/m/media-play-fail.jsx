import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vixpal6lt.css';
import '../../css/p/po4snyb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vixpal6lt"/><path clip-rule="evenodd" class="po4snyb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-play-fail"} {...others} />);
}

export default Component;
