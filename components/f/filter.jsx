import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4sljnbul.css';
import '../../css/h/hwbad23cb.css';
import '../../css/c/c-3m_b4or.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b4sljnbul"/><path class="hwbad23cb"/><path class="c-3m_b4or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:filter"} {...others} />);
}

export default Component;
