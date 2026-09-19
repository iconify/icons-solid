import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhvh4xbwq.css';
import '../../css/f/fj4btac-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhvh4xbwq"/><path class="fj4btac-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:zoom-in"} {...others} />);
}

export default Component;
