import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddk587bmb.css';
import '../../css/w/wtyo39cge.css';
import '../../css/v/vuct_acof.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ddk587bmb"/><path class="wtyo39cge"/><path class="vuct_acof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:optical-audio"} {...others} />);
}

export default Component;
