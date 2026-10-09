import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wccquhbix.css';
import '../../css/f/fkjo-obco.css';
import '../../css/s/shl882bup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wccquhbix"/><path class="fkjo-obco"/><path class="shl882bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-valve-20"} {...others} />);
}

export default Component;
