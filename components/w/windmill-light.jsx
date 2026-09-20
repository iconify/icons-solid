import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra4xehcyp.css';
import '../../css/z/zj7rmmb0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ra4xehcyp"/><path class="zj7rmmb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windmill-light"} {...others} />);
}

export default Component;
