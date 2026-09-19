import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auny0rxul.css';
import '../../css/y/yweqwkbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auny0rxul"/><path clip-rule="evenodd" class="yweqwkbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:cloud-upload-outline"} {...others} />);
}

export default Component;
