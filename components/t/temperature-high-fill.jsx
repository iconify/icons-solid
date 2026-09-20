import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nfn-brb0i.css';
import '../../css/c/cr_ndv8ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nfn-brb0i"/><path class="cr_ndv8ed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:temperature-high-fill"} {...others} />);
}

export default Component;
