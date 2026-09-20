import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc85k4qnp.css';
import '../../css/t/ttjoj7bsu.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/k/kse9bobif.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="uc85k4qnp"/><path class="ttjoj7bsu"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="kse9bobif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-u"} {...others} />);
}

export default Component;
