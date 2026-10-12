import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bob1i5uhd.css';
import '../../css/j/jg49anb9e.css';
import '../../css/e/efs9pxila.css';
import '../../css/z/zy7rbeb6n.css';
import '../../css/e/e25s4g3bx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="bob1i5uhd"/><circle class="jg49anb9e"/><circle class="efs9pxila"/><circle class="zy7rbeb6n"/><path class="e25s4g3bx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bicycle"} {...others} />);
}

export default Component;
