import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx7m9rkgt.css';
import '../../css/r/re9i-z8xd.css';
import '../../css/m/m0515rd-x.css';
import '../../css/y/yj961prsx.css';
import '../../css/z/z04drlb1l.css';
import '../../css/c/c-3drubap.css';
import '../../css/e/ewoco5bnt.css';
import '../../css/x/x2nxenc7e.css';
import '../../css/j/js16bfy3v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yx7m9rkgt"/><path class="re9i-z8xd"/><path class="m0515rd-x"/><path class="yj961prsx"/><g class="z04drlb1l"><path class="c-3drubap"/><path class="ewoco5bnt"/><path class="x2nxenc7e"/><path class="js16bfy3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:camping"} {...others} />);
}

export default Component;
