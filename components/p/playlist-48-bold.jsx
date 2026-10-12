import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t85dv3bhf.css';
import '../../css/h/hvlek604j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t85dv3bhf"/><path class="hvlek604j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:playlist-48-bold"} {...others} />);
}

export default Component;
