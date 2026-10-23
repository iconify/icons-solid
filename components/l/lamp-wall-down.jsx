import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds8lrw-bm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ds8lrw-bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:lamp-wall-down"} {...others} />);
}

export default Component;
