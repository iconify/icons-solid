import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b16pw7s_v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b16pw7s_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coughing-face-in-circle-outline"} {...others} />);
}

export default Component;
