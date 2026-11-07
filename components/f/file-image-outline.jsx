import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfeim8bpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gfeim8bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-image-outline"} {...others} />);
}

export default Component;
