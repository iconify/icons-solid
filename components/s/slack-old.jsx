import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md1t4lm0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="md1t4lm0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:slack-old"} {...others} />);
}

export default Component;
