import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/k/ke8792blf.css';
import '../../css/l/lmjdh1bkf.css';
import '../../css/a/awmhbrbhe.css';
import '../../css/z/zlsft4bna.css';
import '../../css/j/jzur5qbrg.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="ke8792blf"/><path class="lmjdh1bkf"/><path class="awmhbrbhe"/><path class="zlsft4bna"/><path class="jzur5qbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:vi"} {...others} />);
}

export default Component;
