import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abepz8bal.css';
import '../../css/h/h2b5tt5ue.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="abepz8bal"/><path class="h2b5tt5ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:release-16"} {...others} />);
}

export default Component;
