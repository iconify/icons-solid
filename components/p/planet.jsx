import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/s/s-xzqvejr.css';
import '../../css/d/dukry73pf.css';
import '../../css/s/sbozl5bay.css';
import '../../css/s/spjfx4bcg.css';
import '../../css/p/pja9v0dnj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="s-xzqvejr"/><path clip-rule="evenodd" class="dukry73pf"/></g><path clip-rule="evenodd" class="sbozl5bay"/><path clip-rule="evenodd" class="spjfx4bcg"/><path clip-rule="evenodd" class="pja9v0dnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:planet"} {...others} />);
}

export default Component;
