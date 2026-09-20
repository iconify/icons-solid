import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/tnni57nyx.css';
import '../../css/e/exv8mlbwd.css';
import '../../css/t/t5osg0bzi.css';
import '../../css/a/a8rhsbbes.css';
import '../../css/o/oaf9t3bzr.css';
import '../../css/s/ssnkahrib.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="tnni57nyx"/><path class="exv8mlbwd"/><path class="t5osg0bzi"/></g><path class="a8rhsbbes"/><path class="oaf9t3bzr"/><path class="ssnkahrib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up-left"} {...others} />);
}

export default Component;
