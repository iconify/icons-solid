import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ux863l7jy.css';
import '../../css/u/uewkoebro.css';
import '../../css/y/ytveh6zgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ux863l7jy"/><path class="uewkoebro"/><path clip-rule="evenodd" class="ytveh6zgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bug-duotone"} {...others} />);
}

export default Component;
