import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc0z2hpjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cc0z2hpjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-stroke-square-filled"} {...others} />);
}

export default Component;
