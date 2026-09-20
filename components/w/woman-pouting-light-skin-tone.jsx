import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj-n85ffv.css';
import '../../css/u/uwrqdfbcl.css';
import '../../css/m/ms_xipbzk.css';
import '../../css/i/iyfihfbby.css';
import '../../css/m/mdbjzbadi.css';
import '../../css/g/gxsdwnt3y.css';
import '../../css/p/pgsqsjudc.css';
import '../../css/l/l117oj6ad.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yj-n85ffv"/><path class="uwrqdfbcl"/><path class="ms_xipbzk"/><path class="iyfihfbby"/><path class="mdbjzbadi"/><path class="gxsdwnt3y"/><path class="pgsqsjudc"/><path class="l117oj6ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-pouting-light-skin-tone"} {...others} />);
}

export default Component;
