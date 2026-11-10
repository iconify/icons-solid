import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7_0xz__t.css';
import '../../css/j/jtqza1bht.css';
import '../../css/a/a142pul9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d7_0xz__t"/><path class="jtqza1bht"/><path clip-rule="evenodd" class="a142pul9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scan-user"} {...others} />);
}

export default Component;
