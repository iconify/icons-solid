import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvkad84mt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvkad84mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:compass-discover-fill"} {...others} />);
}

export default Component;
