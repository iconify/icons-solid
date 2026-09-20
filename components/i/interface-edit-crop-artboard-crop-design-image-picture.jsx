import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oxvgr6aqa.css';
import '../../css/t/tw8nk2bag.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="oxvgr6aqa"/><path class="tw8nk2bag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-crop-artboard-crop-design-image-picture"} {...others} />);
}

export default Component;
