import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-ki4cbhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-ki4cbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hot-tub-filled"} {...others} />);
}

export default Component;
