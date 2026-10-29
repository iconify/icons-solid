import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ywqlgrn8l.css';
import '../../css/a/ax_f3jbbk.css';
import '../../css/a/a900ikb8p.css';
import '../../css/a/a6785dwqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k ywqlgrn8l"/><path class="ax_f3jbbk wm-a"/><path class="a900ikb8p wm-k"/><path class="a6785dwqv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cake-sketch"} {...others} />);
}

export default Component;
