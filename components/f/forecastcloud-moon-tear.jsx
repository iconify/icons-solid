import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt9wrr88u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt9wrr88u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:forecastcloud-moon-tear"} {...others} />);
}

export default Component;
