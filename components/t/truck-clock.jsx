import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/memn6_fup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="memn6_fup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:truck-clock"} {...others} />);
}

export default Component;
