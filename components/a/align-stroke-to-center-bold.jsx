import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xktn4bb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xktn4bb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:align-stroke-to-center-bold"} {...others} />);
}

export default Component;
