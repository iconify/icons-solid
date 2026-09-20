import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz2uyo1tb.css';
import '../../css/o/o0r-t3scj.css';
import '../../css/h/haw0rhlsk.css';
import '../../css/s/s_06nchrg.css';
import '../../css/k/kt4vq9bzh.css';
import '../../css/e/e0o0x2_gz.css';
import '../../css/s/sm51opkqp.css';
import '../../css/a/amv65kboo.css';
import '../../css/r/rovbzsb_i.css';
import '../../css/z/zm-r-ccew.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qz2uyo1tb"/><path class="o0r-t3scj"/><path class="haw0rhlsk"/><path class="s_06nchrg"/><path class="kt4vq9bzh"/><path class="e0o0x2_gz"/><path class="sm51opkqp"/><circle transform="rotate(-24.122 43.94 27.074)" class="amv65kboo"/><path class="rovbzsb_i"/><path class="zm-r-ccew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cherry-blossom"} {...others} />);
}

export default Component;
