import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7ghzu60p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7ghzu60p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brain-circuit-filled"} {...others} />);
}

export default Component;
