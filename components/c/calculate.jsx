import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-h3nsb6a.css';
import '../../css/a/av-zrzb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a-h3nsb6a"/><path class="av-zrzb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calculate"} {...others} />);
}

export default Component;
