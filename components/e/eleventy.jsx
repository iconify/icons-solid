import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu1wy4b6g.css';
import '../../css/y/yuoo8p78p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tu1wy4b6g"/><path class="yuoo8p78p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:eleventy"} {...others} />);
}

export default Component;
