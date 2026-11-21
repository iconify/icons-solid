import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl153uk6t.css';
import '../../css/r/rv21otbpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl153uk6t"/><path class="rv21otbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layer-arrow-down-filled"} {...others} />);
}

export default Component;
