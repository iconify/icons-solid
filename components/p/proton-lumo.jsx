import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se25dobhl.css';
import '../../css/c/ca86ajbig.css';
import '../../css/c/czfpzhavx.css';
import '../../css/t/tck5xc1vt.css';
import '../../css/a/a1t6h1b8l.css';
import '../../css/k/ka-tubc6r.css';
import '../../css/i/ioyha_qrh.css';
import '../../css/z/zvyotnflq.css';
import '../../css/c/cd90rebtk.css';
import '../../css/m/m74i8gbcv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="se25dobhl"/><path class="ca86ajbig"/><path class="czfpzhavx"/><path class="tck5xc1vt"/><path class="a1t6h1b8l"/><path class="ka-tubc6r"/><path class="ioyha_qrh"/><path class="zvyotnflq"/><path class="cd90rebtk"/><path class="m74i8gbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-lumo"} {...others} />);
}

export default Component;
