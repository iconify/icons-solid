import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afl1-ubdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afl1-ubdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rectangle-solid"} {...others} />);
}

export default Component;
