import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xq7ebza7w.css';
import '../../css/y/yq_jwv13o.css';
import '../../css/z/z6etbudia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGXekBPd0c)" class="cuyn6tgcc"><path class="xq7ebza7w"/><path class="yq_jwv13o"/></g><defs><clipPath id="SVGXekBPd0c"><path class="z6etbudia"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-notification-fill"} {...others} />);
}

export default Component;
