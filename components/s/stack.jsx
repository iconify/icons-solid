import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s3o2xd_tt.css';
import '../../css/w/wvfwkdb0h.css';
import '../../css/b/blez6fbhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s3o2xd_tt"/><path clip-rule="evenodd" class="wvfwkdb0h"/><path class="blez6fbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:stack"} {...others} />);
}

export default Component;
