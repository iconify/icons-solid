import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbz0mkcdt.css';
import '../../css/h/h-3o7y3iu.css';
import '../../css/m/m1otdsbdn.css';
import '../../css/s/so476kb1q.css';
import '../../css/a/a5gz9p9jc.css';
import '../../css/v/vnlzx5chh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zbz0mkcdt"/><path class="h-3o7y3iu"/><path class="m1otdsbdn"/><path class="so476kb1q"/><path class="a5gz9p9jc"/><path class="vnlzx5chh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gifts-duo"} {...others} />);
}

export default Component;
