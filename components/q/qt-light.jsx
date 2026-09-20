import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/z/zbq-e--gs.css';
import '../../css/u/ua2ui3bev.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="zbq-e--gs"/><path clip-rule="evenodd" class="ua2ui3bev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:qt-light"} {...others} />);
}

export default Component;
