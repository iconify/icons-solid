import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9zewgbqh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q9zewgbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:futbol"} {...others} />);
}

export default Component;
