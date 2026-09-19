import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o92xhbckf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o92xhbckf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:garbage-organic"} {...others} />);
}

export default Component;
