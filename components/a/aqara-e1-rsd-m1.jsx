import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k393ltima.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k393ltima"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-e1-rsd-m1"} {...others} />);
}

export default Component;
