import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/ifovk2b4j.css';
import '../../css/m/mlmqiibci.css';
import '../../css/m/mp7cqf5pg.css';
import '../../css/t/tzd-n9efz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="ifovk2b4j"/><path clip-rule="evenodd" class="mlmqiibci"/></g><path clip-rule="evenodd" class="mp7cqf5pg"/><path clip-rule="evenodd" class="tzd-n9efz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:flag-straight"} {...others} />);
}

export default Component;
