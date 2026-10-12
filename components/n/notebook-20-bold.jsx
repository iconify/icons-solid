import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmdpf7x1u.css';
import '../../css/i/i_ynx8bhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kmdpf7x1u"/><path class="i_ynx8bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-20-bold"} {...others} />);
}

export default Component;
