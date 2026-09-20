import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yt8hcjwme.css';
import '../../css/n/n1z8l7bfw.css';
import '../../css/q/qj0m4nk1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yt8hcjwme"/><path class="n1z8l7bfw"/><path class="qj0m4nk1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:playlist-album-1"} {...others} />);
}

export default Component;
