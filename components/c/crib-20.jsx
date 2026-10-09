import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzbu0ndxo.css';
import '../../css/z/zdzqfvyfv.css';
import '../../css/r/r5j29ko6j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nzbu0ndxo"/><path class="zdzqfvyfv"/><path class="r5j29ko6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crib-20"} {...others} />);
}

export default Component;
