import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwkw019fh.css';
import '../../css/m/mpgu6g9gp.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="uwkw019fh"/><path clip-rule="evenodd" class="mpgu6g9gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:chevron-down-circle"} {...others} />);
}

export default Component;
