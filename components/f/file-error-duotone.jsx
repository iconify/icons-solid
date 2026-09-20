import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uowju7b0j.css';
import '../../css/k/kdu1anxjb.css';
import '../../css/q/q7p8ge37d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uowju7b0j"/><path class="kdu1anxjb"/><path class="q7p8ge37d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file-error-duotone"} {...others} />);
}

export default Component;
