import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3cjifb3b.css';
import '../../css/e/e5mqq8b2d.css';
import '../../css/n/nc0wrwjgz.css';
import '../../css/b/b5axrpttp.css';
import '../../css/w/wkal2fbka.css';
import '../../css/d/dl6jej4bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i3cjifb3b"/><path class="e5mqq8b2d"/><path class="nc0wrwjgz"/><path class="b5axrpttp"/><path class="wkal2fbka"/><path class="dl6jej4bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dropbox-logo"} {...others} />);
}

export default Component;
