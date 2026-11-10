import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yzrhsrj7m.css';
import '../../css/s/s159o8byd.css';
import '../../css/m/mvhbz79_d.css';
import '../../css/f/fupsmlbqj.css';
import '../../css/i/idyw1jwjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yzrhsrj7m"/><path class="s159o8byd"/><path class="mvhbz79_d"/><path class="fupsmlbqj"/><path class="idyw1jwjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:folded-menu"} {...others} />);
}

export default Component;
