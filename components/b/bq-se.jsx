import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v9_4idbxv.css';
import '../../css/k/k019w99ml.css';
import '../../css/x/xbq5c9bhf.css';
import '../../css/r/rcz2xu53i.css';
import '../../css/n/ndumkib5f.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="v9_4idbxv"/><path class="k019w99ml"/><path class="xbq5c9bhf"/><path class="rcz2xu53i"/><path class="ndumkib5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:bq-se"} {...others} />);
}

export default Component;
