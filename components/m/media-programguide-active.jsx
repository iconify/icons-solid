import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnvw-hb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nnvw-hb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-programguide-active"} {...others} />);
}

export default Component;
