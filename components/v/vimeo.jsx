import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqfn-ipyo.css';

const viewBox = {"width":1158.764,"height":1000};
const content = `<path class="dqfn-ipyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:vimeo"} {...others} />);
}

export default Component;
