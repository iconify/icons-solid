import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1qo8c0hp.css';
import '../../css/j/jck9-oazd.css';
import '../../css/g/g0ni6vb5b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z1qo8c0hp"/><path class="jck9-oazd"/><path class="g0ni6vb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-20"} {...others} />);
}

export default Component;
