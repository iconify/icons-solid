import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9i8f50fi.css';
import '../../css/b/btdwznbdt.css';
import '../../css/v/vsn5h673m.css';
import '../../css/b/b48_fx5yv.css';
import '../../css/e/ek-ccxtkl.css';
import '../../css/y/yo2fez3mw.css';
import '../../css/b/bmn9ambyz.css';
import '../../css/n/ng98avb_t.css';
import '../../css/r/rurvrnlhn.css';
import '../../css/r/rt2eomx4r.css';
import '../../css/j/j-y2wybsu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c9i8f50fi"/><path class="btdwznbdt"/><path class="vsn5h673m"/><path class="b48_fx5yv"/><path class="ek-ccxtkl"/><path class="yo2fez3mw"/><path class="bmn9ambyz"/><circle class="ng98avb_t"/><circle class="rurvrnlhn"/><path class="rt2eomx4r"/><path class="j-y2wybsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crying-cat"} {...others} />);
}

export default Component;
