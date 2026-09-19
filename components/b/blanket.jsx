import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl1qd3ihr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yl1qd3ihr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:blanket"} {...others} />);
}

export default Component;
