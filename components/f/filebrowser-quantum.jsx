import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s77lopbsd.css';
import '../../css/a/ajx-gfbps.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s77lopbsd"/><path class="ajx-gfbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filebrowser-quantum"} {...others} />);
}

export default Component;
