import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/ce1si_ibe.css';
import '../../css/u/uvj8ehppa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ce1si_ibe"/><path class="uvj8ehppa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bug-play"} {...others} />);
}

export default Component;
