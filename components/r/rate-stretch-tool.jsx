import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vom9q9u4u.css';
import '../../css/q/q8390zcod.css';
import '../../css/v/vl8q6rbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vom9q9u4u"/><path class="q8390zcod"/><path class="vl8q6rbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:rate-stretch-tool"} {...others} />);
}

export default Component;
