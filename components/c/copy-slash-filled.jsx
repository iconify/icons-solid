import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt3rw1bev.css';
import '../../css/u/uwmcnls3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xt3rw1bev"/><path class="uwmcnls3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:copy-slash-filled"} {...others} />);
}

export default Component;
