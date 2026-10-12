import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjly8-_kl.css';
import '../../css/g/gf8o-_-9z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wjly8-_kl"/><path class="gf8o-_-9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:projector-48"} {...others} />);
}

export default Component;
