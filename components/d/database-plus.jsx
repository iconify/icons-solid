import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zofy89fep.css';
import '../../css/m/moe--ccqy.css';
import '../../css/n/n8bh06exd.css';
import '../../css/r/rzz19_b2x.css';
import '../../css/o/o49jzbcjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zofy89fep"/><path class="moe--ccqy"/><path class="n8bh06exd"/><path class="rzz19_b2x"/><path class="o49jzbcjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:database-plus"} {...others} />);
}

export default Component;
