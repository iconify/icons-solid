import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isjs923of.css';
import '../../css/h/h406p6b-d.css';
import '../../css/u/uztxdbcez.css';
import '../../css/g/g95ts_-xw.css';
import '../../css/f/f2lf3jble.css';
import '../../css/l/l_rijulsv.css';
import '../../css/a/ac_0i3b-t.css';
import '../../css/c/cg4nyzbzj.css';

const viewBox = {"width":320,"height":320};
const content = `<path class="isjs923of"/><path class="h406p6b-d"/><path class="uztxdbcez"/><path class="g95ts_-xw"/><path class="f2lf3jble"/><circle class="l_rijulsv"/><circle class="ac_0i3b-t"/><ellipse class="cg4nyzbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:lobehub"} {...others} />);
}

export default Component;
