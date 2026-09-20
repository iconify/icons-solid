import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1_w2zbng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d1_w2zbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:instapaper"} {...others} />);
}

export default Component;
