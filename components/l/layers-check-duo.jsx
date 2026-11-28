import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imhjn0jvd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x5p80bb3e.css';
import '../../css/z/ztw5k99hi.css';
import '../../css/y/yu9-2bb7w.css';
import '../../css/t/tth5h6bax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imhjn0jvd secondary"/><g class="dt0cm9dhy primary"><path class="x5p80bb3e"/><path class="ztw5k99hi"/><path class="yu9-2bb7w"/><path class="tth5h6bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-check-duo"} {...others} />);
}

export default Component;
