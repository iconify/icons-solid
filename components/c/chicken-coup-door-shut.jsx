import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed5q7mbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ed5q7mbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:chicken-coup-door-shut"} {...others} />);
}

export default Component;
