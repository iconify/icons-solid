import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi8be4b8f.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb6z_dbtz.css';

const viewBox = {"width":15,"height":15};
const content = `<defs><path id="SVGe8XTUbxL" class="xi8be4b8f"/></defs><mask id="SVGpZtlpbaw" class="cuyn6tgcc"><use href="#SVGe8XTUbxL"/></mask><g class="cuyn6tgcc"><use href="#SVGe8XTUbxL"/><path mask="url(#SVGpZtlpbaw)" class="rb6z_dbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:panel-bottom-minimized"} {...others} />);
}

export default Component;
