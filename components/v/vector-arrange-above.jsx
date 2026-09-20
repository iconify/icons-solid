import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf1qn4z0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xf1qn4z0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:vector-arrange-above"} {...others} />);
}

export default Component;
