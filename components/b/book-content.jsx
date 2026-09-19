import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do0-t4b8n.css';
import '../../css/q/qf6fzcbip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do0-t4b8n"/><path class="qf6fzcbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:book-content"} {...others} />);
}

export default Component;
