import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj9q7uu1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj9q7uu1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:stage-spot-light"} {...others} />);
}

export default Component;
