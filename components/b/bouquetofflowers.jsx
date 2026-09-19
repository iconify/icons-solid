import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxlllvbdo.css';
import '../../css/g/g80vszd7g.css';
import '../../css/d/d-0hz9b8g.css';
import '../../css/q/quarchbwd.css';
import '../../css/z/z7_tncbjb.css';
import '../../css/e/eaxoz3bjm.css';
import '../../css/y/y72hzldtk.css';
import '../../css/w/wgn003k6s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fxlllvbdo"/><path class="g80vszd7g"/><path class="d-0hz9b8g"/><path class="quarchbwd"/><path class="z7_tncbjb"/><circle class="eaxoz3bjm"/><path class="y72hzldtk"/><circle class="wgn003k6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bouquetofflowers"} {...others} />);
}

export default Component;
