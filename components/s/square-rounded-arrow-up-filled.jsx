import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrbp2tvgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrbp2tvgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-arrow-up-filled"} {...others} />);
}

export default Component;
