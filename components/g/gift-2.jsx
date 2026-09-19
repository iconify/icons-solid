import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wo2rq19cf.css';
import '../../css/x/xx97h9bce.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="wo2rq19cf"/><path class="xx97h9bce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-2"} {...others} />);
}

export default Component;
