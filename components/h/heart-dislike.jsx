import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmmf48b4e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bmmf48b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:heart-dislike"} {...others} />);
}

export default Component;
