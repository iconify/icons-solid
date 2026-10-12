import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4wfvmb9g.css';
import '../../css/k/kqr5xyb8q.css';
import '../../css/e/evopurlem.css';
import '../../css/j/jcxcxcb3t.css';
import '../../css/p/pccofcbol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s4wfvmb9g"/><circle class="kqr5xyb8q"/><path class="evopurlem"/><circle class="jcxcxcb3t"/><path class="pccofcbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camping"} {...others} />);
}

export default Component;
