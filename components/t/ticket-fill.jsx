import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_l6o_b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c_l6o_b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket-fill"} {...others} />);
}

export default Component;
