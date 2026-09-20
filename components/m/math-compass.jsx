import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1zx5f6ip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1zx5f6ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:math-compass"} {...others} />);
}

export default Component;
