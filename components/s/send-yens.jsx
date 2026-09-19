import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnkf2h0mj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mnkf2h0mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:send-yens"} {...others} />);
}

export default Component;
