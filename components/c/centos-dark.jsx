import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8u43xb9m.css';
import '../../css/i/iid8cxbvx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o8u43xb9m"/><path class="iid8cxbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:centos-dark"} {...others} />);
}

export default Component;
