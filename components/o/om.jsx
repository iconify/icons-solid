import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r9vm--b0n.css';
import '../../css/p/pjtu282jf.css';
import '../../css/i/ibp1hj90j.css';
import '../../css/g/gvuy0e83x.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r9vm--b0n"/><path class="pjtu282jf"/><path class="ibp1hj90j"/><path class="gvuy0e83x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:om"} {...others} />);
}

export default Component;
