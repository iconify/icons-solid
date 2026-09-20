import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgr9lbbrc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sgr9lbbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:bicycle-share"} {...others} />);
}

export default Component;
