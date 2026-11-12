import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzk01q4nh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kzk01q4nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docs-collaboration-light"} {...others} />);
}

export default Component;
