import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl5jfab4x.css';
import '../../css/l/luhh6r95d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dl5jfab4x"/><path class="luhh6r95d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:waste-manhole"} {...others} />);
}

export default Component;
