import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmkq3nmdi.css';
import '../../css/g/g2yfz6ydr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jmkq3nmdi"/><path class="g2yfz6ydr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:godot-assets"} {...others} />);
}

export default Component;
