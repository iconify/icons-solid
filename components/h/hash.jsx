import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w5ismxbie.css';
import '../../css/x/xe_14vbba.css';
import '../../css/c/cbmnwebmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w5ismxbie"/><path class="xe_14vbba"/><path class="cbmnwebmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hash"} {...others} />);
}

export default Component;
