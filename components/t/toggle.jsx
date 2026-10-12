import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa7_p1bdj.css';
import '../../css/q/qsuyhd5qb.css';
import '../../css/c/czmevebqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aa7_p1bdj"/><path class="qsuyhd5qb"/><path class="czmevebqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toggle"} {...others} />);
}

export default Component;
