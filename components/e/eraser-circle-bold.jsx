import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb-js9b9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sb-js9b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eraser-circle-bold"} {...others} />);
}

export default Component;
