import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztiienbai.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGoWCmBljB" class="ztiienbai"/></defs><g class="ft5dv1b6b"><use href="#SVGoWCmBljB"/><use href="#SVGoWCmBljB" class="p_3zmsvya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:view-agenda"} {...others} />);
}

export default Component;
