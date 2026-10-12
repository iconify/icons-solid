import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l37b5fo4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l37b5fo4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pen-filled"} {...others} />);
}

export default Component;
