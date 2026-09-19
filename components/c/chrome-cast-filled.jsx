import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw5x7qc2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dw5x7qc2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chrome-cast-filled"} {...others} />);
}

export default Component;
