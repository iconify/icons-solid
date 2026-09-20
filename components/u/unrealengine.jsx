import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga3b3ijty.css';
import '../../css/v/vn993tbah.css';
import '../../css/r/r7fsfvpov.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="ga3b3ijty"/><path clip-rule="evenodd" class="vn993tbah"/><path clip-rule="evenodd" class="r7fsfvpov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:unrealengine"} {...others} />);
}

export default Component;
