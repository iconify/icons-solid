import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twg_fi4pi.css';
import '../../css/k/kd5gzltfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="twg_fi4pi"/><path class="kd5gzltfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-favorite-bookmark-bold-duotone"} {...others} />);
}

export default Component;
