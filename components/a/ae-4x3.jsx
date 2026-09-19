import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1xzrlbhy.css';
import '../../css/v/v18c9fbau.css';
import '../../css/r/r38kscbse.css';
import '../../css/j/jlqxt-bjp.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="o1xzrlbhy"/><path class="v18c9fbau"/><path class="r38kscbse"/><path class="jlqxt-bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ae-4x3"} {...others} />);
}

export default Component;
