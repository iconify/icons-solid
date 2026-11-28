import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x5p80bb3e.css';
import '../../css/z/ztw5k99hi.css';
import '../../css/y/yu9-2bb7w.css';
import '../../css/s/stvt0zbng.css';
import '../../css/y/ysr2lfbli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x5p80bb3e"/><path class="ztw5k99hi"/><path class="yu9-2bb7w"/><path class="stvt0zbng"/><path class="ysr2lfbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-arrow-up"} {...others} />);
}

export default Component;
