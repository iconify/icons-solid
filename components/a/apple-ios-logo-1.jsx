import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pt1kjpbzv.css';
import '../../css/x/xqajvbbjd.css';
import '../../css/f/f06hpqbzb.css';
import '../../css/e/epa7lztpq.css';
import '../../css/r/r86mes41q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pt1kjpbzv"/><path class="xqajvbbjd"/><path class="f06hpqbzb"/><path class="epa7lztpq"/><path class="r86mes41q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-ios-logo-1"} {...others} />);
}

export default Component;
