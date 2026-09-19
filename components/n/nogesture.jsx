import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhii2jbwl.css';
import '../../css/z/zu-q5w26d.css';
import '../../css/x/x9sz88beq.css';
import '../../css/u/uapndm7jp.css';
import '../../css/e/eaudu0dju.css';
import '../../css/z/zck36wbhu.css';
import '../../css/n/np1fl0meg.css';
import '../../css/b/bmwyelcil.css';
import '../../css/d/d36lotr6j.css';
import '../../css/c/cwn2f68zv.css';
import '../../css/f/f8t2ioboh.css';
import '../../css/o/orrv2k4qw.css';
import '../../css/x/xr2j6i8fb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mhii2jbwl"/><circle class="zu-q5w26d"/><path class="x9sz88beq"/><circle class="uapndm7jp"/><path class="eaudu0dju"/><path class="zck36wbhu"/><path class="np1fl0meg"/><path class="bmwyelcil"/><path class="d36lotr6j"/><path class="cwn2f68zv"/><path class="f8t2ioboh"/><path class="orrv2k4qw"/><path class="xr2j6i8fb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nogesture"} {...others} />);
}

export default Component;
