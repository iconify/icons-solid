import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd9uvobdv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gd9uvobdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:smartphone-refresh"} {...others} />);
}

export default Component;
