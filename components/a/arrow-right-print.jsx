import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/r/r3fhl1btz.css';
import '../../css/n/nulb2v76w.css';
import '../../css/w/w5nji7zgy.css';
import '../../css/p/pxed057ih.css';
import '../../css/u/ubq82-blj.css';
import '../../css/r/rbg1rccrx.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="r3fhl1btz"/><path class="nulb2v76w"/><path class="w5nji7zgy"/></g><path class="pxed057ih"/><path class="ubq82-blj"/><path class="rbg1rccrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-right-print"} {...others} />);
}

export default Component;
