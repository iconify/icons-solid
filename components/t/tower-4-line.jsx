import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwkq0rbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwkq0rbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tower-4-line"} {...others} />);
}

export default Component;
