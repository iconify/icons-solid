import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-3hlxbsn.css';
import '../../css/r/r-_vyyqit.css';
import '../../css/h/hnp0uqbuc.css';
import '../../css/a/ac-8-6bxl.css';
import '../../css/u/ug1wlpbqa.css';
import '../../css/v/v16ya4jnv.css';
import '../../css/e/e6jm3r3mi.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="n-3hlxbsn"><path class="r-_vyyqit"/><path class="hnp0uqbuc"/></g><path clip-rule="evenodd" class="ac-8-6bxl"/><path class="ug1wlpbqa"/><path clip-rule="evenodd" class="v16ya4jnv"/><path clip-rule="evenodd" class="e6jm3r3mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:photo-print"} {...others} />);
}

export default Component;
