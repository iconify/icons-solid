import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ismujpbiw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/d/d2ddiubde.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG13CMxczo" class="ismujpbiw"/></defs><g class="ft5dv1b6b"><use href="#SVG13CMxczo"/><g class="av3m8fbrw"><path class="d2ddiubde"/><use href="#SVG13CMxczo"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-application"} {...others} />);
}

export default Component;
