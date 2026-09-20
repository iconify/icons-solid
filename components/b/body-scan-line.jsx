import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwe_2a0ua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwe_2a0ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:body-scan-line"} {...others} />);
}

export default Component;
