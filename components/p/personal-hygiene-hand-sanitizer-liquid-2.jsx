import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlim-4b5l.css';
import '../../css/b/bx9kiqocv.css';
import '../../css/l/lkp8d_bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hlim-4b5l"/><path class="bx9kiqocv"/><path class="lkp8d_bfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-liquid-2"} {...others} />);
}

export default Component;
