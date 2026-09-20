import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmiv2pbgq.css';
import '../../css/v/vh-56ab7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmiv2pbgq"/><path class="vh-56ab7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:vmware"} {...others} />);
}

export default Component;
