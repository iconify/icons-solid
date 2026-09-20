import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg6-z-39m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rg6-z-39m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-using-terminal-kiosk-with-shekel"} {...others} />);
}

export default Component;
