import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/c/c8vg9w67k.css';
import '../../css/j/j697l3uzc.css';
import '../../css/v/vbj2lk1_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="c8vg9w67k"/><path class="j697l3uzc"/><path class="vbj2lk1_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:steinberg-logo"} {...others} />);
}

export default Component;
