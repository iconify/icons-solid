import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikkzycc1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ikkzycc1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:private-internet-access"} {...others} />);
}

export default Component;
