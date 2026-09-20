import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m76gx5b6o.css';
import '../../css/l/ll5nhre1j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m76gx5b6o"/><path class="ll5nhre1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:small-orange-diamond"} {...others} />);
}

export default Component;
