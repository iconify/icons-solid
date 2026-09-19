import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eldv-d4uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eldv-d4uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:spinner-earring"} {...others} />);
}

export default Component;
