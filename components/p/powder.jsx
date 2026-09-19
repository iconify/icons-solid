import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkhqt04qs.css';
import '../../css/e/ephn9kbhi.css';
import '../../css/x/x9z-nvf3j.css';
import '../../css/x/x_24ribdh.css';
import '../../css/s/s-w1zny5l.css';
import '../../css/y/ym_2cab-x.css';
import '../../css/u/uuoi5fbhx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nkhqt04qs"/><path class="ephn9kbhi"/><ellipse class="x9z-nvf3j"/><path class="x_24ribdh"/><path class="s-w1zny5l"/><ellipse class="ym_2cab-x"/><ellipse class="uuoi5fbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:powder"} {...others} />);
}

export default Component;
