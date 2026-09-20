import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cehuattnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cehuattnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:gift-2-fill"} {...others} />);
}

export default Component;
