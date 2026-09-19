import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cth2izb7y.css';
import '../../css/d/d2t-0cbdb.css';
import '../../css/x/xbm6mjgvm.css';
import '../../css/e/ewteercny.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cth2izb7y"/><path class="d2t-0cbdb"/><path class="xbm6mjgvm"/><path class="ewteercny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:mu"} {...others} />);
}

export default Component;
