import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1va1ac7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b1va1ac7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jetblue-airways-dark"} {...others} />);
}

export default Component;
