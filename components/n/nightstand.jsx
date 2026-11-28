import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ag1j6_bzf.css';
import '../../css/u/u-8x-3bpu.css';
import '../../css/m/mtd7yhr0o.css';
import '../../css/a/a6zgemb3a.css';
import '../../css/z/zb63svr9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ag1j6_bzf"/><path class="u-8x-3bpu"/><path class="mtd7yhr0o"/><path class="a6zgemb3a"/><path class="zb63svr9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:nightstand"} {...others} />);
}

export default Component;
