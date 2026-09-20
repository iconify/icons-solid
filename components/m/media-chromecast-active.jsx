import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8h5gaujn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s8h5gaujn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-chromecast-active"} {...others} />);
}

export default Component;
