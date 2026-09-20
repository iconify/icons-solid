import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unl4ioy1a.css';
import '../../css/u/u27h525fw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="unl4ioy1a"/><path class="u27h525fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:inkscape"} {...others} />);
}

export default Component;
