import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq5f9sn3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nq5f9sn3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:forward-5-line"} {...others} />);
}

export default Component;
