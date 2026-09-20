import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4uwgeb9s.css';
import '../../css/y/yo4ocac3c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g4uwgeb9s"/><path clip-rule="evenodd" class="yo4ocac3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:youtube-solid"} {...others} />);
}

export default Component;
