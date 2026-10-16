import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjny1bchv.css';
import '../../css/x/xpq7hmt-u.css';
import '../../css/x/xyw2m9brw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fjny1bchv"/><path class="xpq7hmt-u"/><path class="xyw2m9brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-size-48-bold"} {...others} />);
}

export default Component;
