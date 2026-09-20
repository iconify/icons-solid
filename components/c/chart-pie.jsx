import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6jhl1jki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6jhl1jki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:chart-pie"} {...others} />);
}

export default Component;
