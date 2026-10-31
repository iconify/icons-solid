import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfx7khbig.css';
import '../../css/y/yerhk-bxy.css';
import '../../css/s/snr9azloa.css';
import '../../css/c/ci-2pdbjk.css';
import '../../css/s/sv0dpobbw.css';
import '../../css/a/a8qfciduq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mfx7khbig"/><path class="yerhk-bxy"/><path class="snr9azloa wm-k"/><path class="ci-2pdbjk wm-a"/><path class="sv0dpobbw"/><path class="a8qfciduq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pandal"} {...others} />);
}

export default Component;
