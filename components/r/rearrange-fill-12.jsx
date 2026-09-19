import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e44b6rnsm.css';
import '../../css/c/c_uln0btt.css';
import '../../css/d/dk8tv0byu.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><rect class="e44b6rnsm"/><rect class="c_uln0btt"/><rect class="dk8tv0byu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:rearrange-fill-12"} {...others} />);
}

export default Component;
