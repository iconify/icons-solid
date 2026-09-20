import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp0hrebwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hp0hrebwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:network-strength-3"} {...others} />);
}

export default Component;
