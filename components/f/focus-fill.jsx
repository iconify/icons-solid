import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5qd9wgmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5qd9wgmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:focus-fill"} {...others} />);
}

export default Component;
