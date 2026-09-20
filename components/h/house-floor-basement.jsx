import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbkwmk22y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbkwmk22y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:house-floor-basement"} {...others} />);
}

export default Component;
