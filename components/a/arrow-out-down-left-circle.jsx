import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2k-5lb6a.css';
import '../../css/j/jbyiw1r0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2k-5lb6a"/><path class="jbyiw1r0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-left-circle"} {...others} />);
}

export default Component;
