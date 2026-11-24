import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfcghdbkz.css';
import '../../css/y/ycfegbxjl.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="cfcghdbkz"/><path class="ycfegbxjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:passonce"} {...others} />);
}

export default Component;
