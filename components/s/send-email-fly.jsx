import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oufzxwf-a.css';
import '../../css/c/cxwt06uik.css';
import '../../css/v/v7fmw-bld.css';
import '../../css/y/ycpa6rbjz.css';
import '../../css/j/j0qw0rbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oufzxwf-a"/><path class="cxwt06uik"/><path class="v7fmw-bld"/><path class="ycpa6rbjz"/><path class="j0qw0rbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:send-email-fly"} {...others} />);
}

export default Component;
