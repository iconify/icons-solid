import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikhyofbzz.css';
import '../../css/a/ay4i28ssf.css';
import '../../css/a/a6rc3ubbb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ikhyofbzz"/><path class="ay4i28ssf"/><path class="a6rc3ubbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:agv-48-bold"} {...others} />);
}

export default Component;
