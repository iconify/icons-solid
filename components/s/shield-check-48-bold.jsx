import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce0cywmuu.css';
import '../../css/x/xnv-ktb4z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ce0cywmuu"/><path class="xnv-ktb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-check-48-bold"} {...others} />);
}

export default Component;
