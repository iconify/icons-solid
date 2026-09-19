import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3m_nk0lf.css';

const viewBox = {"width":1792,"height":1664};
const content = `<path class="n3m_nk0lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:no-comment-bubble"} {...others} />);
}

export default Component;
