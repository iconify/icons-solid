import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xo9ubbzzb.css';
import '../../css/m/m-39ime3o.css';
import '../../css/z/z7bmdpbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xo9ubbzzb"/><path class="m-39ime3o"/><path class="z7bmdpbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:win-rar-line-duotone"} {...others} />);
}

export default Component;
