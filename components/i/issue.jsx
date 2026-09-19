import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/p/p3g2l7o3u.css';
import '../../css/p/pg9erg_-c.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><circle class="p3g2l7o3u"/><circle class="pg9erg_-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:issue"} {...others} />);
}

export default Component;
