import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-ytayb5o.css';
import '../../css/t/tqz5znvkx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k-ytayb5o"/><path class="tqz5znvkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orange-heart"} {...others} />);
}

export default Component;
