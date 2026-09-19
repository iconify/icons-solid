import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej8dilp1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ej8dilp1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:traffic-cone"} {...others} />);
}

export default Component;
