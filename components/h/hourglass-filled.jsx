import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dozf3_b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dozf3_b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hourglass-filled"} {...others} />);
}

export default Component;
