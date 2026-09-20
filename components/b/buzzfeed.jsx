import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/garrdgo3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="garrdgo3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:buzzfeed"} {...others} />);
}

export default Component;
