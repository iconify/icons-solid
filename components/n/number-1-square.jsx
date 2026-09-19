import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cgm86oegm.css';
import '../../css/x/x7onvleiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cgm86oegm"/><path class="x7onvleiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-1-square"} {...others} />);
}

export default Component;
