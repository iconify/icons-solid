import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2rld1b5y.css';
import '../../css/p/pv2v38bzw.css';
import '../../css/l/l0k0tg8io.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x2rld1b5y"/><path class="pv2v38bzw"/><path class="l0k0tg8io"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:work-history"} {...others} />);
}

export default Component;
