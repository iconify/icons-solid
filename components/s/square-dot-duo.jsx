import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bctqhabuv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/h/hlxla-wwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bctqhabuv secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="hlxla-wwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-dot-duo"} {...others} />);
}

export default Component;
