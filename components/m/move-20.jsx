import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz03g9rra.css';
import '../../css/k/kz2zzrs0w.css';
import '../../css/a/a_pbj0bst.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pz03g9rra"/><path class="kz2zzrs0w"/><path class="a_pbj0bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-20"} {...others} />);
}

export default Component;
