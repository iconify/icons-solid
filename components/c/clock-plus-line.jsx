import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_b3mzfrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_b3mzfrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clock-plus-line"} {...others} />);
}

export default Component;
