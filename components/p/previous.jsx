import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl-_zwbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xl-_zwbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:previous"} {...others} />);
}

export default Component;
