import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1pa5zbha.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q8jo13wlh.css';
import '../../css/s/s6n9quymf.css';
import '../../css/k/k8_6klqxr.css';
import '../../css/v/v9ze89yda.css';
import '../../css/w/wiu73qx2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1pa5zbha secondary"/><g class="dt0cm9dhy primary"><path class="q8jo13wlh"/><path class="s6n9quymf"/><path class="k8_6klqxr"/><path class="v9ze89yda"/><path class="wiu73qx2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ice-skate-duo"} {...others} />);
}

export default Component;
