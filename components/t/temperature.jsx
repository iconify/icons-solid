import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp4oqwbqh.css';
import '../../css/i/iynmzp4ho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hp4oqwbqh"/><circle class="iynmzp4ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:temperature"} {...others} />);
}

export default Component;
