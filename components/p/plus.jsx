import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxuzz-civ.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxuzz-civ"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:plus"} {...others} />);
}

export default Component;
