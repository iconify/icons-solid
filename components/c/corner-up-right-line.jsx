import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id_vwwy8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="id_vwwy8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:corner-up-right-line"} {...others} />);
}

export default Component;
