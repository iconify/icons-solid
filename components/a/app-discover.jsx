import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8ubvfbil.css';
import '../../css/u/uyme-uvxc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f8ubvfbil ouiIcon__fillSecondary"/><path class="uyme-uvxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-discover"} {...others} />);
}

export default Component;
