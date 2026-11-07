import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7e0u3hqa.css';
import '../../css/p/plovyotpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7e0u3hqa"/><path clip-rule="evenodd" class="plovyotpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-minimalistic-close-outline"} {...others} />);
}

export default Component;
