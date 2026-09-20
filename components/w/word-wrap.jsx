import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzg8c0oxb.css';
import '../../css/o/ozx0m_bwd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kzg8c0oxb"/><path class="ozx0m_bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:word-wrap"} {...others} />);
}

export default Component;
