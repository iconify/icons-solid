import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_-5f0bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_-5f0bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:mobile-signal-two"} {...others} />);
}

export default Component;
