import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xr5qhnbxd.css';
import '../../css/w/wwb7e_b9q.css';
import '../../css/g/g4oh7sjkc.css';
import '../../css/o/ohjhefb8s.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xr5qhnbxd"/><path class="wwb7e_b9q"/><path class="g4oh7sjkc"/><path class="ohjhefb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pencil-paintbrush"} {...others} />);
}

export default Component;
