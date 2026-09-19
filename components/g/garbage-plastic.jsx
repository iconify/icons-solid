import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x87cd2g6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x87cd2g6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:garbage-plastic"} {...others} />);
}

export default Component;
