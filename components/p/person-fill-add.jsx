import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cixd1bccw.css';
import '../../css/x/xdfmrpbgb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="cixd1bccw"/><path class="xdfmrpbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-fill-add"} {...others} />);
}

export default Component;
