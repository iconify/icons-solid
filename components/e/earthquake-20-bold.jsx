import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gclpr8i1a.css';
import '../../css/r/royu2xbzr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gclpr8i1a"/><path class="royu2xbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earthquake-20-bold"} {...others} />);
}

export default Component;
