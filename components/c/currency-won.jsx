import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw4g2xfsm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mw4g2xfsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:currency-won"} {...others} />);
}

export default Component;
