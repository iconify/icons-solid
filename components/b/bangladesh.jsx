import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeezzsgew.css';
import '../../css/l/lxcqcfbmi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="zeezzsgew"/><path class="lxcqcfbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bangladesh"} {...others} />);
}

export default Component;
