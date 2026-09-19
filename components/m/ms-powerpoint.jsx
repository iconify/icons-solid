import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/a/a1r6rtrur.css';
import '../../css/l/lraqajimb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="a1r6rtrur"/><path class="lraqajimb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ms-powerpoint"} {...others} />);
}

export default Component;
