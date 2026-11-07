import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0y-ep3tz.css';
import '../../css/p/ptk9sgbum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0y-ep3tz"/><path clip-rule="evenodd" class="ptk9sgbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screen-share-outline"} {...others} />);
}

export default Component;
