import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k926z6j4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k926z6j4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:done2-outlined"} {...others} />);
}

export default Component;
