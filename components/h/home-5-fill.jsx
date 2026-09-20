import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn2j6ebje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn2j6ebje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:home-5-fill"} {...others} />);
}

export default Component;
