import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9yzp1ixx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9yzp1ixx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trilium-notes-light"} {...others} />);
}

export default Component;
