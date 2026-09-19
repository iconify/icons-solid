import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8kpsnbql.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/li0ifseah.css';
import '../../css/g/gwyt20tco.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGggBtugIQ"><path class="p8kpsnbql"/></clipPath></defs><g clip-path="url(#SVGggBtugIQ)" transform="translate(0 15)scale(.9375)"><g class="d2kvgvbvc"><path class="li0ifseah"/><path class="gwyt20tco"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:np-4x3"} {...others} />);
}

export default Component;
