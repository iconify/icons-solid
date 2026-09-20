import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijp3onb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ijp3onb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:money-euro-circle-fill"} {...others} />);
}

export default Component;
