import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q06-f5uwb.css';
import '../../css/h/htjb-9byh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q06-f5uwb"/><path class="htjb-9byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folders-duotone"} {...others} />);
}

export default Component;
