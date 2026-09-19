import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/f/feq_89-ci.css';
import '../../css/v/vh2mvb58f.css';
import '../../css/q/qhr7zmbnd.css';
import '../../css/q/qrkca_zdu.css';
import '../../css/u/unmfkcuxh.css';
import '../../css/n/nlkvh9bjf.css';
import '../../css/c/cju4bqz2k.css';
import '../../css/u/uf-t-ebiq.css';
import '../../css/e/ea7qxg8kr.css';
import '../../css/f/f6phdtbgs.css';
import '../../css/n/nenypfbmf.css';
import '../../css/s/s0rgqnjii.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="feq_89-ci"/><path class="vh2mvb58f"/><path class="qhr7zmbnd"/><path class="qrkca_zdu"/><path class="unmfkcuxh"/><path class="nlkvh9bjf"/><path class="cju4bqz2k"/><path class="uf-t-ebiq"/><path class="ea7qxg8kr"/><path class="f6phdtbgs"/><path class="nenypfbmf"/><path class="s0rgqnjii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:layer"} {...others} />);
}

export default Component;
