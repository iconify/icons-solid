import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z87jsv16f.css';
import '../../css/g/gr2hwkk9e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z87jsv16f"/><path class="gr2hwkk9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-down-48-bold"} {...others} />);
}

export default Component;
