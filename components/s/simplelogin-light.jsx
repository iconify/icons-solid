import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je0d-9t6x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="je0d-9t6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:simplelogin-light"} {...others} />);
}

export default Component;
