import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf6zbp2gr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wf6zbp2gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-dashboard-lights-bold"} {...others} />);
}

export default Component;
