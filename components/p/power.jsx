import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usac0up9h.css';
import '../../css/b/bo0bdiq0x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="usac0up9h"/><path class="bo0bdiq0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:power"} {...others} />);
}

export default Component;
