import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpvw9jb-i.css';
import '../../css/l/l1a2lyb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tpvw9jb-i"/><path class="l1a2lyb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-3x2-duotone"} {...others} />);
}

export default Component;
