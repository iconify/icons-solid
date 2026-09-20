import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc8ninjpx.css';
import '../../css/e/epg14abwe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nc8ninjpx"/><path class="epg14abwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:comment-ellipsis-o"} {...others} />);
}

export default Component;
