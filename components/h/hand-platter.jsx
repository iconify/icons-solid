import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yfpkhjrsu.css';
import '../../css/x/xo1iftloa.css';
import '../../css/h/hk_b0_b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yfpkhjrsu"/><path class="xo1iftloa"/><path class="hk_b0_b-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-platter"} {...others} />);
}

export default Component;
