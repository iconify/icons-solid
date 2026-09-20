import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bumd6o66x.css';
import '../../css/i/ix2n_eb7r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bumd6o66x"/><path clip-rule="evenodd" class="ix2n_eb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:park-filled"} {...others} />);
}

export default Component;
