import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl5jfab4x.css';
import '../../css/z/z_xj5lr8j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dl5jfab4x"/><path class="z_xj5lr8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:water-manhole"} {...others} />);
}

export default Component;
