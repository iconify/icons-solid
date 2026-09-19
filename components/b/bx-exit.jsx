import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxyw-hbts.css';
import '../../css/o/o0pkr5bpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uxyw-hbts"/><path class="o0pkr5bpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-exit"} {...others} />);
}

export default Component;
