import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eppc3o07n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eppc3o07n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:weather-partly-lightning"} {...others} />);
}

export default Component;
