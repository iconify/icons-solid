import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g91x_4bnh.css';
import '../../css/r/razqxq9hk.css';
import '../../css/a/an80ctb9m.css';
import '../../css/v/vomceyrsc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="g91x_4bnh"/><path class="razqxq9hk"/><path class="an80ctb9m"/><path class="vomceyrsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gifts"} {...others} />);
}

export default Component;
