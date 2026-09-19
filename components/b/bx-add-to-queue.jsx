import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoy6vkbrs.css';
import '../../css/l/lbf20db5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoy6vkbrs"/><path class="lbf20db5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-add-to-queue"} {...others} />);
}

export default Component;
