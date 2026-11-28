import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmecobckr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bx22elb0t.css';
import '../../css/l/l7hat5ags.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmecobckr secondary"/><g class="dt0cm9dhy primary"><path class="bx22elb0t"/><path class="l7hat5ags"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:inbox-duo"} {...others} />);
}

export default Component;
