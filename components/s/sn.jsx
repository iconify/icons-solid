import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/ikip3ib8m.css';
import '../../css/e/ecctieb4n.css';
import '../../css/e/eoj1oxbzv.css';
import '../../css/e/edjlzkb1l.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ikip3ib8m"/><path class="ecctieb4n"/><path class="eoj1oxbzv"/><path class="edjlzkb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sn"} {...others} />);
}

export default Component;
