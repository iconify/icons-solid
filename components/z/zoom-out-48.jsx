import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkje3ybpz.css';
import '../../css/d/d34fk4x7z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gkje3ybpz"/><path class="d34fk4x7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-out-48"} {...others} />);
}

export default Component;
