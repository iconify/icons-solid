import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbdfjabgc.css';
import '../../css/j/jzq9heogi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbdfjabgc"/><path class="jzq9heogi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-zip"} {...others} />);
}

export default Component;
