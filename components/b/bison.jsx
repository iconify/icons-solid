import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3igw5fho.css';
import '../../css/b/bokkfrbsq.css';
import '../../css/p/pmyrwrkih.css';
import '../../css/d/dtbff-bfx.css';
import '../../css/x/xkjkjcb2c.css';
import '../../css/f/fbmc41bjt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k3igw5fho"/><path class="bokkfrbsq"/><path class="pmyrwrkih"/><path class="dtbff-bfx"/><path class="xkjkjcb2c"/><path class="fbmc41bjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bison"} {...others} />);
}

export default Component;
