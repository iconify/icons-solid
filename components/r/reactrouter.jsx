import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dghn0kt5a.css';
import '../../css/i/ioxby4bxt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dghn0kt5a"/><path class="ioxby4bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:reactrouter"} {...others} />);
}

export default Component;
