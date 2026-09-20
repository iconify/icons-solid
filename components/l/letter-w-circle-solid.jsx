import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw7-8ydfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw7-8ydfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-w-circle-solid"} {...others} />);
}

export default Component;
