import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9aix1bex.css';
import '../../css/h/hh1t7h7bu.css';
import '../../css/e/e-2fhubal.css';
import '../../css/n/n6lshjbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9aix1bex"/><path class="hh1t7h7bu"/><path clip-rule="evenodd" class="e-2fhubal"/><path class="n6lshjbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-bold"} {...others} />);
}

export default Component;
