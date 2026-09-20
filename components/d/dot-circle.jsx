import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz4vio0-y.css';
import '../../css/v/vd_9zuben.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kz4vio0-y"/><path class="vd_9zuben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:dot-circle"} {...others} />);
}

export default Component;
