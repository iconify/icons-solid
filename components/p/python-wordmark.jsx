import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uq10-mbyx.css';
import '../../css/r/r1mj1gb_e.css';
import '../../css/r/r94vybc5l.css';

const viewBox = {"width":128,"height":128};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="uq10-mbyx"/><path class="r1mj1gb_e"/><path class="r94vybc5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:python-wordmark"} {...others} />);
}

export default Component;
