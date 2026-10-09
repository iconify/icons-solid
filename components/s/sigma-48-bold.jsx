import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqkh_cb6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zqkh_cb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sigma-48-bold"} {...others} />);
}

export default Component;
