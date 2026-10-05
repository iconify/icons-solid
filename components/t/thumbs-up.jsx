import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lk9a7sn2f.css';
import '../../css/v/vvq5aqitv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="lk9a7sn2f"/><path class="vvq5aqitv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:thumbs-up"} {...others} />);
}

export default Component;
