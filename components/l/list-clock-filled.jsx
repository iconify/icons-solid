import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szg_xwy0s.css';
import '../../css/e/eozjh4bxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="szg_xwy0s"/><path class="eozjh4bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:list-clock-filled"} {...others} />);
}

export default Component;
