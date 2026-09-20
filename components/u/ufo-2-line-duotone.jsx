import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vjae8jb8u.css';
import '../../css/r/r56ehqgoa.css';
import '../../css/r/rg4xnib3l.css';
import '../../css/k/kejfovb9p.css';
import '../../css/o/ohv0ql-rw.css';
import '../../css/a/a1i93bc5s.css';
import '../../css/h/hougaabdc.css';
import '../../css/u/uovqdhbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vjae8jb8u"/><path class="r56ehqgoa"/><path class="rg4xnib3l"/><path class="kejfovb9p"/><path class="ohv0ql-rw"/><path class="a1i93bc5s"/><path class="hougaabdc"/><path class="uovqdhbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-line-duotone"} {...others} />);
}

export default Component;
