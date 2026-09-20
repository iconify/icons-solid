import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu5zp6fme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu5zp6fme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tooltip"} {...others} />);
}

export default Component;
