import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uem6nqbvo.css';
import '../../css/a/aap5atbkv.css';
import '../../css/s/s8-jh0bvg.css';
import '../../css/r/r4k-9nyuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uem6nqbvo"/><path class="aap5atbkv"/><path class="s8-jh0bvg wm-a"/><path class="r4k-9nyuf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mails-duo"} {...others} />);
}

export default Component;
