import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s04r6fc4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s04r6fc4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:goggles-fill"} {...others} />);
}

export default Component;
