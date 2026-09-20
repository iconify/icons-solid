import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwv-rhboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwv-rhboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:arrow-right-up-fill"} {...others} />);
}

export default Component;
