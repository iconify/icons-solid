import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpvw9jb-i.css';
import '../../css/z/zhqp79yom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tpvw9jb-i"/><path class="zhqp79yom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-2x3-duotone"} {...others} />);
}

export default Component;
