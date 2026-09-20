import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx-ibsb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fx-ibsb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:a-arrow-down"} {...others} />);
}

export default Component;
