import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0y6dt08n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s0y6dt08n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:monkey-filled"} {...others} />);
}

export default Component;
