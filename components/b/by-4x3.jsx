import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7ls9hbyc.css';
import '../../css/g/g29n117yn.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fka6fbbya.css';
import '../../css/v/v70ztibld.css';
import '../../css/u/u9ev_pskv.css';
import '../../css/n/n1-4p1b6q.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGDqBSDbMu"><path class="z7ls9hbyc"/></clipPath></defs><path class="g29n117yn"/><g clip-path="url(#SVGDqBSDbMu)" transform="matrix(.52885 0 0 .53333 5 0)" class="n1mjunbsu"><g id="SVGvMqLMbpt"><path id="SVG1C7TzcJc" class="fka6fbbya"/><use href="#SVG1C7TzcJc" transform="matrix(-1 0 0 1 200 0)"/><path class="v70ztibld"/></g><use href="#SVGvMqLMbpt" transform="matrix(1 0 0 -1 0 900)"/><path class="u9ev_pskv"/></g><path class="n1-4p1b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:by-4x3"} {...others} />);
}

export default Component;
