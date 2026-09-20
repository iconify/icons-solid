import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv7o_0b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dv7o_0b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ribbon-health"} {...others} />);
}

export default Component;
