import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7way5tqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7way5tqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:garage-3-prong"} {...others} />);
}

export default Component;
