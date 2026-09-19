import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jcyzwkn5r.css';
import '../../css/d/dmcfnzbah.css';
import '../../css/x/xmpz2xbad.css';
import '../../css/j/jgrmltb5t.css';
import '../../css/l/lfj1icvfs.css';
import '../../css/d/dlcxuua4v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jcyzwkn5r"/><path class="dmcfnzbah"/><path clip-rule="evenodd" class="xmpz2xbad"/><path clip-rule="evenodd" class="jgrmltb5t"/><path class="lfj1icvfs"/><path clip-rule="evenodd" class="dlcxuua4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:divide-outline"} {...others} />);
}

export default Component;
