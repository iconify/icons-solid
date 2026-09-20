import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qia54wv4o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qia54wv4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:letter-box-us"} {...others} />);
}

export default Component;
