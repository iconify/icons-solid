import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-0y1ac1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-0y1ac1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:sailboat-check"} {...others} />);
}

export default Component;
