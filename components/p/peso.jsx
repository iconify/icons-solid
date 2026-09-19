import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_js4bbia.css';
import '../../css/d/d47xi2b9o.css';
import '../../css/b/be97_nbqe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j_js4bbia"/><path class="d47xi2b9o"/><path class="be97_nbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:peso"} {...others} />);
}

export default Component;
