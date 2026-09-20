import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsxeq50_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsxeq50_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flag-2-bold"} {...others} />);
}

export default Component;
