import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucy80rbgu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ucy80rbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coughing-face-with-phlegm"} {...others} />);
}

export default Component;
