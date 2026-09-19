import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw56jtzlm.css';
import '../../css/i/i7gp9cbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw56jtzlm"/><path class="i7gp9cbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chevrons-up"} {...others} />);
}

export default Component;
