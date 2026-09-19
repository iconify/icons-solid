import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/meky6tfum.css';
import '../../css/a/aiid3obtg.css';
import '../../css/b/bdzq151wq.css';
import '../../css/z/zy4mqmbwa.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="meky6tfum"/><path class="aiid3obtg"/><path class="bdzq151wq"/><path class="zy4mqmbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:az"} {...others} />);
}

export default Component;
