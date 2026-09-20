import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu1zrnu_l.css';
import '../../css/v/vd_9zuben.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iu1zrnu_l"/><path class="vd_9zuben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chevron-circle-right-o"} {...others} />);
}

export default Component;
