import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhi9wsb5v.css';

const viewBox = {"width":1003,"height":1000};
const content = `<path class="mhi9wsb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:twitter-bird"} {...others} />);
}

export default Component;
