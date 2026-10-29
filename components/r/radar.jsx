import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/o/o7ss73b9k.css';
import '../../css/a/a9qr98blj.css';
import '../../css/c/cdjhx5b5o.css';
import '../../css/p/pkdx_7b-x.css';
import '../../css/b/bjgzbfbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="o7ss73b9k wm-a"/><path class="a9qr98blj"/><path class="cdjhx5b5o wm-a"/><path class="pkdx_7b-x"/><path class="bjgzbfbec wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radar"} {...others} />);
}

export default Component;
