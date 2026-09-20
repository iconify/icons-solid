import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrx0drblt.css';
import '../../css/k/kvk09bbcv.css';
import '../../css/c/cv18w6a5r.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="mrx0drblt"/><circle class="kvk09bbcv"/><path class="cv18w6a5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:divide"} {...others} />);
}

export default Component;
