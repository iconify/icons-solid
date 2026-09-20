import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcb_4fb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcb_4fb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:newsbreak"} {...others} />);
}

export default Component;
