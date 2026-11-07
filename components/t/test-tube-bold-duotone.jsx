import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/z14_0gbyd.css';
import '../../css/f/fu6frkzrs.css';
import '../../css/p/pq4qlabdh.css';
import '../../css/b/b6d_zub2x.css';
import '../../css/d/dipfovbpe.css';
import '../../css/c/cuz1aeb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="z14_0gbyd"/><path class="fu6frkzrs"/></g><path class="pq4qlabdh"/><path class="b6d_zub2x"/><path class="dipfovbpe"/><path class="cuz1aeb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:test-tube-bold-duotone"} {...others} />);
}

export default Component;
