import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e727a1bty.css';
import '../../css/r/r98qut7eh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e727a1bty"/><path class="r98qut7eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:padding-top"} {...others} />);
}

export default Component;
