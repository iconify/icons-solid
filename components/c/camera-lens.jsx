import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g8qfvnbjm.css';
import '../../css/e/egfs-cciu.css';
import '../../css/z/zga1a2bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="g8qfvnbjm"/><circle class="egfs-cciu"/><path class="zga1a2bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-lens"} {...others} />);
}

export default Component;
