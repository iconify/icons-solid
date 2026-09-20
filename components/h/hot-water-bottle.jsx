import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9j1rqkok.css';
import '../../css/w/wtj0ngwad.css';
import '../../css/v/vmi9hybwc.css';
import '../../css/k/k9-av-ajg.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/x/xbfh9wciz.css';
import '../../css/q/qyeo-ltmv.css';
import '../../css/c/cvmxdqbew.css';
import '../../css/s/s8uuktobp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u9j1rqkok"/><path class="wtj0ngwad"/><path class="vmi9hybwc"/><circle class="k9-av-ajg"/><g class="to5_hpm1w"><path class="xbfh9wciz"/><circle class="qyeo-ltmv"/><path class="cvmxdqbew"/><path class="s8uuktobp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hot-water-bottle"} {...others} />);
}

export default Component;
