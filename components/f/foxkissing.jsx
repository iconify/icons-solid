import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/f/fmp-zfldq.css';
import '../../css/h/hfw1bwbbw.css';
import '../../css/d/d7rb61byp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="fmp-zfldq"/><path class="hfw1bwbbw"/><path class="d7rb61byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:foxkissing"} {...others} />);
}

export default Component;
