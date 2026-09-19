import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qs6hszyma.css';
import '../../css/b/b8nviyb0p.css';
import '../../css/o/osuz1epzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qs6hszyma"/><path class="b8nviyb0p"/><path class="osuz1epzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shuffle"} {...others} />);
}

export default Component;
