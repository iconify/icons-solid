import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmj18yb6f.css';
import '../../css/t/tfqe-pf5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmj18yb6f"/><path class="tfqe-pf5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:derc"} {...others} />);
}

export default Component;
