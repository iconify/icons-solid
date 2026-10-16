import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie4p76ois.css';

const viewBox = {"width":310,"height":310};
const content = `<path class="ie4p76ois"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cockpit-cms-light"} {...others} />);
}

export default Component;
