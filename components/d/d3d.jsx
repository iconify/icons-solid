import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-w3vmb5c.css';
import '../../css/m/m97pomy2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-w3vmb5c"/><path clip-rule="evenodd" class="m97pomy2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:d3d"} {...others} />);
}

export default Component;
