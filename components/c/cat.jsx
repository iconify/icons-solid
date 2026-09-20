import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wa3l1s0qj.css';
import '../../css/y/ytqvtjj-b.css';
import '../../css/a/a6fiiy7zw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wa3l1s0qj"/><path class="ytqvtjj-b"/><path clip-rule="evenodd" class="a6fiiy7zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cat"} {...others} />);
}

export default Component;
