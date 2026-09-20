import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw0a3jpgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fw0a3jpgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:aerial-lift-line"} {...others} />);
}

export default Component;
