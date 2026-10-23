import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s5_0hjy-z.css';
import '../../css/f/f6cpadc7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s5_0hjy-z"/><path class="f6cpadc7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:award"} {...others} />);
}

export default Component;
