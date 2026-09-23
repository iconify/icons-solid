import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s56avzt5t.css';
import '../../css/u/uj1x9rxik.css';
import '../../css/f/fxrpm_byw.css';
import '../../css/y/ycf5cvo3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s56avzt5t"/><path class="uj1x9rxik"/><path class="fxrpm_byw"/><path class="ycf5cvo3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-sparkles-two-tone"} {...others} />);
}

export default Component;
