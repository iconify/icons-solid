import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-if0tu1z.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzt0bcbrc.css';

const viewBox = {"width":15,"height":15};
const content = `<defs><path id="SVGuE6JWy7V" class="q-if0tu1z"/></defs><mask id="SVGWRTFuega" class="cuyn6tgcc"><use href="#SVGuE6JWy7V"/></mask><g class="cuyn6tgcc"><use href="#SVGuE6JWy7V"/><path mask="url(#SVGWRTFuega)" class="bzt0bcbrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:panel-right-minimized"} {...others} />);
}

export default Component;
