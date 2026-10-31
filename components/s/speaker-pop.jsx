import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czlnr725f.css';
import '../../css/t/tv6ql-8sl.css';
import '../../css/w/wzr97iuji.css';
import '../../css/r/rx7-u4bhw.css';
import '../../css/l/l3w1sfbfa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="czlnr725f"/><path class="tv6ql-8sl"/><path class="wzr97iuji"/><path class="rx7-u4bhw"/><path class="l3w1sfbfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:speaker-pop"} {...others} />);
}

export default Component;
