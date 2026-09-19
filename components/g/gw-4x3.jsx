import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnuvuxczj.css';
import '../../css/r/r6qg7x7wa.css';
import '../../css/i/icahpubho.css';
import '../../css/h/hi_4q9gft.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="nnuvuxczj"/><path class="r6qg7x7wa"/><path class="icahpubho"/><g id="SVGNrKxlDaG" transform="matrix(80 0 0 80 110 240)"><path id="SVGV4UZXcSz" transform="rotate(18 0 -1)" class="hi_4q9gft"/><use width="100%" height="100%" href="#SVGV4UZXcSz" transform="scale(-1 1)"/></g><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(72 110 240)"/><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(144 110 240)"/><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(-144 110 240)"/><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(-72 110 240)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gw-4x3"} {...others} />);
}

export default Component;
