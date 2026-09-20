import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahvhl-yox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahvhl-yox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:equalizer-3-fill"} {...others} />);
}

export default Component;
