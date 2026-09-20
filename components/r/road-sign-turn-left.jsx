import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7cu6ybyi.css';
import '../../css/l/l6my-gbot.css';
import '../../css/e/e_512mo-i.css';
import '../../css/x/x2jsareyn.css';
import '../../css/x/xfdtnnbqd.css';
import '../../css/j/jdk8mmbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y7cu6ybyi"/><path class="l6my-gbot"/><path class="e_512mo-i"/><path class="x2jsareyn"/><path class="xfdtnnbqd"/><path class="jdk8mmbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:road-sign-turn-left"} {...others} />);
}

export default Component;
