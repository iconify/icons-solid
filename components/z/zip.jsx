import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d87tf4g5x.css';
import '../../css/b/btx7j3qro.css';
import '../../css/v/vpayovg2b.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="d87tf4g5x"/><path class="btx7j3qro"/><path class="vpayovg2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:zip"} {...others} />);
}

export default Component;
