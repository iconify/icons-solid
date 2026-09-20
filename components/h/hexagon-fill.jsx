import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-0r88qhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-0r88qhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:hexagon-fill"} {...others} />);
}

export default Component;
