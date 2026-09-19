import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zvv9-ib3u.css';
import '../../css/a/akwnwfb5u.css';
import '../../css/x/x9o47uzpy.css';
import '../../css/a/ae9racynq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zvv9-ib3u"/><path class="akwnwfb5u"/><path class="x9o47uzpy"/><path class="ae9racynq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:mm"} {...others} />);
}

export default Component;
