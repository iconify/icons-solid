import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btrte8rpn.css';
import '../../css/y/yzi0pbb9t.css';
import '../../css/b/be0atoysn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="btrte8rpn"/><path class="yzi0pbb9t"/><path class="be0atoysn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-applause"} {...others} />);
}

export default Component;
