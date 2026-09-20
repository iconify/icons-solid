import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_ltv9mdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_ltv9mdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:paintbrush"} {...others} />);
}

export default Component;
