import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z8bw-lkti.css';
import '../../css/h/hj563rg-r.css';
import '../../css/y/y8wejeb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z8bw-lkti"/><path class="hj563rg-r"/><path class="y8wejeb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-send-flow-01"} {...others} />);
}

export default Component;
