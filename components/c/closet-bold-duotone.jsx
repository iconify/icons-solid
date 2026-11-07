import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqyg7kbpb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/dc7hcta0y.css';
import '../../css/a/axzdh2blw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xqyg7kbpb"/><g class="xtpeb-edw"><path class="dc7hcta0y"/><path class="axzdh2blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-bold-duotone"} {...others} />);
}

export default Component;
