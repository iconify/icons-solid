import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ii3b9xbkx.css';
import '../../css/t/t8r6agbqp.css';
import '../../css/b/bn9scm_6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ii3b9xbkx"/><path class="t8r6agbqp"/><path class="bn9scm_6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mini-music-sqaure"} {...others} />);
}

export default Component;
