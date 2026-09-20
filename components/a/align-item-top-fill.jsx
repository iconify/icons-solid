import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihq9t13ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihq9t13ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:align-item-top-fill"} {...others} />);
}

export default Component;
