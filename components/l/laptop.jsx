import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu6bqfbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu6bqfbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:laptop"} {...others} />);
}

export default Component;
