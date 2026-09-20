import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyw0a_b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyw0a_b2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:beaker-plus-outline"} {...others} />);
}

export default Component;
