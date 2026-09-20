import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5921bc9b.css';
import '../../css/u/uijq5ybza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5921bc9b"/><path class="uijq5ybza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:skl"} {...others} />);
}

export default Component;
