import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of41yqo4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of41yqo4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:downstairs-basement"} {...others} />);
}

export default Component;
