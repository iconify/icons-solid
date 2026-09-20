import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggj775b5b.css';
import '../../css/e/e88c1bc9h.css';
import '../../css/b/b2hbh0bpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ggj775b5b"/><path class="e88c1bc9h"/><path class="b2hbh0bpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-vip"} {...others} />);
}

export default Component;
