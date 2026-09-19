import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb02qn-fy.css';
import '../../css/b/btx7j3qro.css';
import '../../css/k/k8x4m_bbc.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="nb02qn-fy"/><path class="btx7j3qro"/><path class="k8x4m_bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:filevideo"} {...others} />);
}

export default Component;
