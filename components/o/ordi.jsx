import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpwtmbbva.css';
import '../../css/w/w3w4p5b0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpwtmbbva"/><path clip-rule="evenodd" class="w3w4p5b0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ordi"} {...others} />);
}

export default Component;
