import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zadz1fz-o.css';
import '../../css/o/oghs20fic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zadz1fz-o"/><path class="oghs20fic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:umbrella-sharp"} {...others} />);
}

export default Component;
