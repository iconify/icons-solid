import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/urewy6b7w.css';
import '../../css/x/xy8kadpak.css';
import '../../css/u/u7pxlgbga.css';
import '../../css/n/nc2-cgb-d.css';
import '../../css/r/r9qdhw2fj.css';
import '../../css/r/raoe75bom.css';
import '../../css/c/cp0chebpy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="urewy6b7w"/><path clip-rule="evenodd" class="xy8kadpak"/><path class="u7pxlgbga"/><path class="nc2-cgb-d"/><path class="r9qdhw2fj"/><path class="raoe75bom"/><path class="cp0chebpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-generate-voice-robot-2"} {...others} />);
}

export default Component;
