import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aewu89bmt.css';
import '../../css/z/zk6k9jbym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aewu89bmt"/><path class="zk6k9jbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:battery-medium-duotone"} {...others} />);
}

export default Component;
