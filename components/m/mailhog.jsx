import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdaustbot.css';

const viewBox = {"width":1575.6,"height":1575.6,"left":82.5,"top":-157.5};
const content = `<path class="tdaustbot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mailhog"} {...others} />);
}

export default Component;
