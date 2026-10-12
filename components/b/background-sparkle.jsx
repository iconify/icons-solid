import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4otipb9t.css';
import '../../css/x/xk4jj77ja.css';
import '../../css/d/d6no5xmhq.css';
import '../../css/g/gn83ckbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b4otipb9t"/><path class="xk4jj77ja"/><path class="d6no5xmhq"/><path class="gn83ckbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:background-sparkle"} {...others} />);
}

export default Component;
