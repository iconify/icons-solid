import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0r-oet8f.css';
import '../../css/v/vkff342ar.css';
import '../../css/a/a8o9o1rkv.css';
import '../../css/s/s2c20nshg.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="r0r-oet8f"/><path class="vkff342ar"/><path class="a8o9o1rkv"/><path class="s2c20nshg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:suriname"} {...others} />);
}

export default Component;
