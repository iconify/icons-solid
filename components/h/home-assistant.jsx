import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t76hlbckx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t76hlbckx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:home-assistant"} {...others} />);
}

export default Component;
