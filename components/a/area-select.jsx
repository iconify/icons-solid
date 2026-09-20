import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itbt_h6ys.css';
import '../../css/o/o5ayvslgh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="itbt_h6ys"/><path class="o5ayvslgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:area-select"} {...others} />);
}

export default Component;
