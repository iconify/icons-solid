import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru4hu3bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ru4hu3bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:key-round-check"} {...others} />);
}

export default Component;
