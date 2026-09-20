import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pju8r0ixf.css';
import '../../css/e/e-dgl9b9u.css';
import '../../css/u/uopoqacav.css';
import '../../css/s/sb6v-00if.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pju8r0ixf"/><path class="e-dgl9b9u"/><path class="uopoqacav"/><circle class="sb6v-00if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:goldfish"} {...others} />);
}

export default Component;
