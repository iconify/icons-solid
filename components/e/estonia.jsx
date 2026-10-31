import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz_4v-slc.css';
import '../../css/t/t9rd-mm-b.css';
import '../../css/a/acbfzvwzo.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="vz_4v-slc"/><path class="t9rd-mm-b"/><path class="acbfzvwzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:estonia"} {...others} />);
}

export default Component;
