import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j222h5b5x.css';
import '../../css/d/d7aug1b2m.css';
import '../../css/e/e5jk9c-yn.css';
import '../../css/g/gqizmlvif.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="j222h5b5x"/><path class="d7aug1b2m"/><path class="e5jk9c-yn"/><path class="gqizmlvif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:in-tg"} {...others} />);
}

export default Component;
