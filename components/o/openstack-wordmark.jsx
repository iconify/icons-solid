import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae8cvcbjo.css';
import '../../css/z/zdxltopzc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ae8cvcbjo"/><path class="zdxltopzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:openstack-wordmark"} {...others} />);
}

export default Component;
