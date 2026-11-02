import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_ao6nfns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_ao6nfns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:edge-fill"} {...others} />);
}

export default Component;
