import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phlzhsbtw.css';
import '../../css/r/r-murxbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="phlzhsbtw"/><path class="r-murxbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sock"} {...others} />);
}

export default Component;
