import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixkuiac2o.css';
import '../../css/l/lez6mrb8y.css';
import '../../css/n/nmtfkrd1j.css';
import '../../css/q/qqx1kbb4p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ixkuiac2o"/><path clip-rule="evenodd" class="lez6mrb8y"/><path clip-rule="evenodd" class="nmtfkrd1j"/><path class="qqx1kbb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:rocket"} {...others} />);
}

export default Component;
