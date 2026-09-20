import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiqmkkbbu.css';
import '../../css/f/fup0j_byx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eiqmkkbbu"/><path class="fup0j_byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-cloud-off"} {...others} />);
}

export default Component;
