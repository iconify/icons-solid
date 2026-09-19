import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf4_o-boe.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="sf4_o-boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:square-fill-on-circle-fill"} {...others} />);
}

export default Component;
