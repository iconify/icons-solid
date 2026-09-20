import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o84_zbj9g.css';
import '../../css/b/bj7d1e_oq.css';
import '../../css/m/mr9gv2b4t.css';
import '../../css/q/q308abc8x.css';

const viewBox = {"width":452,"height":520};
const content = `<path class="o84_zbj9g"/><path class="bj7d1e_oq"/><path class="mr9gv2b4t"/><path class="q308abc8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:html5"} {...others} />);
}

export default Component;
