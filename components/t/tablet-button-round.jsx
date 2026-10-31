import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qua3fz37b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qua3fz37b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tablet-button-round"} {...others} />);
}

export default Component;
