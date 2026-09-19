import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7ygeobxm.css';
import '../../css/j/j06gedbgm.css';
import '../../css/u/uk49jpy1r.css';
import '../../css/b/b0e2c20pe.css';
import '../../css/o/oocs02bhi.css';
import '../../css/v/vb00-1b7o.css';
import '../../css/b/b733rm_er.css';
import '../../css/d/de675-bvi.css';
import '../../css/u/u-8ze6y0g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o7ygeobxm"/><path class="j06gedbgm"/><path class="uk49jpy1r"/><path class="b0e2c20pe"/><circle class="oocs02bhi"/><circle class="vb00-1b7o"/><path class="b733rm_er"/><path class="de675-bvi"/><path class="u-8ze6y0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:camerawithflash"} {...others} />);
}

export default Component;
