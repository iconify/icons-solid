import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d0appmb6v.css';
import '../../css/o/o0b4ob_tu.css';
import '../../css/h/ho34uhwef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d0appmb6v"/><path class="o0b4ob_tu"/><path class="ho34uhwef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:menu-sparkles-two-tone"} {...others} />);
}

export default Component;
