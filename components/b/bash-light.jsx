import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/g/gt-c4c-ym.css';
import '../../css/i/ixnp5nnxm.css';
import '../../css/x/x10p4zclm.css';
import '../../css/c/c3bwx9daf.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="gt-c4c-ym"/><path clip-rule="evenodd" class="ixnp5nnxm"/><path clip-rule="evenodd" class="x10p4zclm"/><path clip-rule="evenodd" class="c3bwx9daf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:bash-light"} {...others} />);
}

export default Component;
