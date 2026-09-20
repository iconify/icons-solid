import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nshjy3a6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nshjy3a6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:power-plug-disconnected-bold"} {...others} />);
}

export default Component;
