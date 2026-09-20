import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4h48gfgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4h48gfgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:satellite-off"} {...others} />);
}

export default Component;
