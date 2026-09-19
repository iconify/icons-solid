import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/us_y-wb1m.css';
import '../../css/j/j6h40-zid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="us_y-wb1m"/><path class="j6h40-zid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:qr-code"} {...others} />);
}

export default Component;
