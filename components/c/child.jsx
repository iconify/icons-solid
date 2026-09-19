import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tz6em9sgh.css';
import '../../css/v/vcr7oq-po.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="tz6em9sgh"/><path class="vcr7oq-po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:child"} {...others} />);
}

export default Component;
