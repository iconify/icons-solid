import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww6qir.css';
import '../../css/x/xosdux.css';
import '../../css/f/frnhxu.css';
import '../../css/u/u63-fz.css';
import '../../css/o/ojrnxk.css';
import '../../css/u/ukyh5r.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGUx297cmq"><path class="ww6qir xosdux"/><path class="frnhxu u63-fz xosdux"/><path class="ojrnxk u63-fz xosdux"/><path class="u63-fz ukyh5r xosdux"/></mask></defs><path mask="url(#SVGUx297cmq)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:spotify-filled"} {...others} />);
}

export default Component;
