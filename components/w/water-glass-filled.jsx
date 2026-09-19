import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udet_s4_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="udet_s4_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:water-glass-filled"} {...others} />);
}

export default Component;
