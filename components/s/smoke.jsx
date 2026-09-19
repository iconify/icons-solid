import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o59f9vbvm.css';
import '../../css/s/s4exkmb7g.css';
import '../../css/r/rnubj6bws.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="o59f9vbvm"/><path class="s4exkmb7g"/><path class="rnubj6bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:smoke"} {...others} />);
}

export default Component;
