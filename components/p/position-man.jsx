import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb02adbwv.css';
import '../../css/z/ze1a4qyku.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="rb02adbwv"/><path class="ze1a4qyku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:position-man"} {...others} />);
}

export default Component;
