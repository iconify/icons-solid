import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xqc9m_bhp.css';
import '../../css/t/tb18fbycs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xqc9m_bhp"/><path class="tb18fbycs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:buildings"} {...others} />);
}

export default Component;
