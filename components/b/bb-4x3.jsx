import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1srlfbxm.css';
import '../../css/j/jgf1-yx6g.css';
import '../../css/p/pgw3075uw.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="b1srlfbxm"/><path class="jgf1-yx6g"/><path id="SVGrF6Z8dBc" class="pgw3075uw"/><use width="100%" height="100%" href="#SVGrF6Z8dBc" transform="matrix(-1 0 0 1 639.5 0)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bb-4x3"} {...others} />);
}

export default Component;
