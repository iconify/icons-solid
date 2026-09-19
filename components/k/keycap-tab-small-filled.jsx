import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0ft814pq.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="i0ft814pq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:keycap-tab-small-filled"} {...others} />);
}

export default Component;
