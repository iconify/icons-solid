import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_5fz_ecs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p_5fz_ecs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ndr1"} {...others} />);
}

export default Component;
