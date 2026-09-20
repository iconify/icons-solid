import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nase2xuah.css';
import '../../css/b/b19-m_b5y.css';
import '../../css/z/z41dbgpxo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nase2xuah"/><path class="b19-m_b5y"/><path class="z41dbgpxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-generate-portrait-image-spark"} {...others} />);
}

export default Component;
