import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5eugu3ed.css';
import '../../css/v/vd_9zuben.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q5eugu3ed"/><path class="vd_9zuben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chevron-circle-left-o"} {...others} />);
}

export default Component;
