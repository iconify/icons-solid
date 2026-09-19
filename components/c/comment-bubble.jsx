import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqj8fxb2t.css';

const viewBox = {"width":1792,"height":1600};
const content = `<path class="nqj8fxb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:comment-bubble"} {...others} />);
}

export default Component;
