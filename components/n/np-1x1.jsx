import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8kpsnbql.css';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f0tc49j9c.css';
import '../../css/g/gwyt20tco.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGggBtugIQ"><path class="p8kpsnbql"/></clipPath><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)"><g clip-path="url(#SVGggBtugIQ)" transform="translate(0 16)"><g class="d2kvgvbvc"><path class="f0tc49j9c"/><path class="gwyt20tco"/></g></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:np-1x1"} {...others} />);
}

export default Component;
