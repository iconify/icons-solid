import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t46oz2bvl.css';
import '../../css/j/j4v_2dxrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t46oz2bvl"/><path clip-rule="evenodd" class="j4v_2dxrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-stop-filled"} {...others} />);
}

export default Component;
