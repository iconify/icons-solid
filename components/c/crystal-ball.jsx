import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxhmx4bdy.css';
import '../../css/g/gy-xx9boc.css';
import '../../css/f/f11xa_ktj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lxhmx4bdy"/><path class="gy-xx9boc"/><path class="f11xa_ktj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crystal-ball"} {...others} />);
}

export default Component;
