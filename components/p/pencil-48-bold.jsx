import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6_diewni.css';
import '../../css/y/yjg9io82y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c6_diewni"/><path class="yjg9io82y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pencil-48-bold"} {...others} />);
}

export default Component;
