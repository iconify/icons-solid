import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yev7me0jl.css';
import '../../css/f/f62c1c24i.css';
import '../../css/h/h71ihjbka.css';
import '../../css/x/x7ikojbpe.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yev7me0jl"/><path class="f62c1c24i"/><path class="h71ihjbka"/><path class="x7ikojbpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:caret-square-outline"} {...others} />);
}

export default Component;
