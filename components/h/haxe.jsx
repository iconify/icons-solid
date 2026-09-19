import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etl3xd4ro.css';
import '../../css/o/o4692-bvg.css';
import '../../css/v/vzr5szt8w.css';
import '../../css/l/ln1vbbb_d.css';
import '../../css/z/z5ogclbrk.css';
import '../../css/h/h3eh20y8f.css';
import '../../css/x/xfy02kb5p.css';
import '../../css/t/tz4viu23h.css';
import '../../css/d/d83gq8xis.css';
import '../../css/u/usn-mtblu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="etl3xd4ro"/><path class="o4692-bvg"/><path class="vzr5szt8w"/><path class="ln1vbbb_d"/><path class="z5ogclbrk"/><path class="h3eh20y8f"/><path class="xfy02kb5p"/><path class="tz4viu23h"/><path class="d83gq8xis"/><path class="usn-mtblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:haxe"} {...others} />);
}

export default Component;
