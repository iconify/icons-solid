import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb6i78bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sb6i78bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:e-bike-fill"} {...others} />);
}

export default Component;
