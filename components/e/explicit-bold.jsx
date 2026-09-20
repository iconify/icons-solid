import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jerx1q9ma.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jerx1q9ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:explicit-bold"} {...others} />);
}

export default Component;
