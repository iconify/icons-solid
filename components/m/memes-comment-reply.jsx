import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kmlk8lb2q.css';
import '../../css/h/hh7wjvhxa.css';
import '../../css/y/yrgzseein.css';
import '../../css/c/ckd00exgh.css';
import '../../css/c/c-thu7bfw.css';
import '../../css/f/fl3c8zbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kmlk8lb2q"/><path class="hh7wjvhxa"/><path class="yrgzseein"/><path class="ckd00exgh"/><path class="c-thu7bfw"/><path class="fl3c8zbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:memes-comment-reply"} {...others} />);
}

export default Component;
