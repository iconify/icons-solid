import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3muvh5zk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t3muvh5zk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:paperclip"} {...others} />);
}

export default Component;
