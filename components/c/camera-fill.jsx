import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_-13xurt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_-13xurt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:camera-fill"} {...others} />);
}

export default Component;
