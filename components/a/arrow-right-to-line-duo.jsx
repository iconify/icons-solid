import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bobh2gb4b.css';
import '../../css/z/z7ntss-zu.css';
import '../../css/s/swgz-mbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bobh2gb4b"/><path class="z7ntss-zu"/><path class="swgz-mbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-right-to-line-duo"} {...others} />);
}

export default Component;
