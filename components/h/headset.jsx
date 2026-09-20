import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpd3_gbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mpd3_gbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:headset"} {...others} />);
}

export default Component;
