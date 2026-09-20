import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6c8p4bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6c8p4bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:swap-driving-apps-wheel"} {...others} />);
}

export default Component;
