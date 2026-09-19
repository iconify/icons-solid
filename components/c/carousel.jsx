import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/db8sf0adu.css';
import '../../css/c/c0qwhllti.css';
import '../../css/o/oq2jbxbhn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="db8sf0adu"/><path class="c0qwhllti"/><path class="oq2jbxbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:carousel"} {...others} />);
}

export default Component;
