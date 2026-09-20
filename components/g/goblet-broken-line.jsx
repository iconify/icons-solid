import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb_4-lefx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zb_4-lefx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:goblet-broken-line"} {...others} />);
}

export default Component;
