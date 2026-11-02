import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfcbn9dsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfcbn9dsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:github-2-fill"} {...others} />);
}

export default Component;
