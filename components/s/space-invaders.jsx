import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em1zy3qkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="em1zy3qkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:space-invaders"} {...others} />);
}

export default Component;
