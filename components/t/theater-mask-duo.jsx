import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrxmj0biq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gcod-bc8e.css';
import '../../css/l/lx4p1b97v.css';
import '../../css/p/pmpia37up.css';
import '../../css/y/y6i34ubff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wrxmj0biq"/><g class="dt0cm9dhy primary"><path class="gcod-bc8e"/><path class="lx4p1b97v"/><path class="pmpia37up"/><path class="y6i34ubff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:theater-mask-duo"} {...others} />);
}

export default Component;
