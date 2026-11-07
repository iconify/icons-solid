import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2nrf10bf.css';
import '../../css/l/l44xgab5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2nrf10bf"/><path class="l44xgab5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-cog-bold-duotone"} {...others} />);
}

export default Component;
