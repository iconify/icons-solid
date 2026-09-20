import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d36d0zr1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d36d0zr1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:swimming-pool-stairs"} {...others} />);
}

export default Component;
