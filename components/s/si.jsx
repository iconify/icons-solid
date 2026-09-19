import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/aafymk54s.css';
import '../../css/h/haepy696s.css';
import '../../css/x/x9o47uzpy.css';
import '../../css/s/s8lm5clux.css';
import '../../css/e/ejs35enop.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="aafymk54s"/><path class="haepy696s"/><path class="x9o47uzpy"/><path class="s8lm5clux"/><path class="ejs35enop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:si"} {...others} />);
}

export default Component;
