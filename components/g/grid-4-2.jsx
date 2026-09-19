import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt3-4rb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt3-4rb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:grid-4-2"} {...others} />);
}

export default Component;
