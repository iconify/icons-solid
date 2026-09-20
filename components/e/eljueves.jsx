import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbv_j9a6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbv_j9a6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:eljueves"} {...others} />);
}

export default Component;
