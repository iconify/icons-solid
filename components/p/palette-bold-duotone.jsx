import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uq_u8vbon.css';
import '../../css/t/t1bviy9_z.css';
import '../../css/l/l7jzesbrd.css';
import '../../css/w/wx6uobcjh.css';
import '../../css/y/yx4hybbhm.css';
import '../../css/j/j1w8b6n2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path clip-rule="evenodd" class="uq_u8vbon"/><path class="t1bviy9_z"/></g><g class="xtpeb-edw"><path class="l7jzesbrd"/><path class="wx6uobcjh"/></g><path class="yx4hybbhm"/><path class="j1w8b6n2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-bold-duotone"} {...others} />);
}

export default Component;
