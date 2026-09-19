import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsh9rtrrg.css';
import '../../css/p/pnm561ulh.css';
import '../../css/r/r10cmbc9l.css';
import '../../css/g/gyw-nbbys.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="tsh9rtrrg"><rect class="pnm561ulh"/><rect class="r10cmbc9l"/><rect class="gyw-nbbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:columns-3-bold"} {...others} />);
}

export default Component;
