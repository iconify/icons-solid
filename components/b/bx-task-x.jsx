import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/netr9ulfa.css';
import '../../css/k/kwu9_fbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="netr9ulfa"/><path class="kwu9_fbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-task-x"} {...others} />);
}

export default Component;
