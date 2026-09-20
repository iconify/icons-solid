import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v57pwdwow.css';
import '../../css/t/t6-1xfgnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="cuyn6tgcc"><path class="v57pwdwow"/><path class="t6-1xfgnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:show"} {...others} />);
}

export default Component;
