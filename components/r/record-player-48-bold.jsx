import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxdnnozti.css';
import '../../css/r/rm8mvg9xh.css';
import '../../css/r/r1mw8e2fu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bxdnnozti"/><path class="rm8mvg9xh"/><path class="r1mw8e2fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:record-player-48-bold"} {...others} />);
}

export default Component;
