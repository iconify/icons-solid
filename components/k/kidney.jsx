import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb-a7obtp.css';
import '../../css/u/udd3bbc2x.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/x/xmlopdb5x.css';
import '../../css/r/r2gx4q-fh.css';
import '../../css/d/dzt9t0cww.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGnM0WBd5k" class="wb-a7obtp"/></defs><g class="udd3bbc2x"><use href="#SVGnM0WBd5k"/><use href="#SVGnM0WBd5k"/></g><g class="brzn_0bpr"><path class="xmlopdb5x"/><path class="r2gx4q-fh"/><path class="dzt9t0cww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kidney"} {...others} />);
}

export default Component;
