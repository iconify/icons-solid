import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2whz3qht.css';
import '../../css/o/oofikhb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j2whz3qht"/><path class="oofikhb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-signal-duotone"} {...others} />);
}

export default Component;
