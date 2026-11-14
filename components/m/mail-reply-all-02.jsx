import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/bffbfcbff.css';
import '../../css/z/z5y389h1p.css';
import '../../css/g/gjj6jlbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="bffbfcbff"/><path class="z5y389h1p"/><path class="gjj6jlbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-reply-all-02"} {...others} />);
}

export default Component;
