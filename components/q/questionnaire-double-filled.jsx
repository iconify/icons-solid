import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0z3i-1xz.css';
import '../../css/k/kj2p-acws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0z3i-1xz"/><path class="kj2p-acws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:questionnaire-double-filled"} {...others} />);
}

export default Component;
