import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5zd-yeve.css';
import '../../css/i/i5wpqgyez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5zd-yeve"/><path clip-rule="evenodd" class="i5wpqgyez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-square-bold"} {...others} />);
}

export default Component;
