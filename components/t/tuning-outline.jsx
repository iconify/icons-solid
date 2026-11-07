import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd-g4xjxg.css';
import '../../css/p/pzp40rbgb.css';
import '../../css/w/weeljg33q.css';
import '../../css/o/o_0no9brk.css';
import '../../css/l/l26jvib9m.css';
import '../../css/b/b4zvoks8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd-g4xjxg"/><path clip-rule="evenodd" class="pzp40rbgb"/><path clip-rule="evenodd" class="weeljg33q"/><path class="o_0no9brk"/><path class="l26jvib9m"/><path class="b4zvoks8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-outline"} {...others} />);
}

export default Component;
