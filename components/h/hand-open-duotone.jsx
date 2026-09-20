import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xr6qiq71e.css';
import '../../css/v/v4wywtbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xr6qiq71e"/><path class="v4wywtbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-open-duotone"} {...others} />);
}

export default Component;
