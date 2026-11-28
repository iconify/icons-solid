import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck4cn5b6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck4cn5b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:stopwatch-pause"} {...others} />);
}

export default Component;
