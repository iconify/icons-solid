import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn2uuxbep.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="cn2uuxbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-alt-waning-gibbous-1"} {...others} />);
}

export default Component;
