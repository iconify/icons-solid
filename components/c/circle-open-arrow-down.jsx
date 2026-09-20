import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bb4lkobis.css';
import '../../css/o/ovi96-bap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bb4lkobis"/><path class="ovi96-bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-open-arrow-down"} {...others} />);
}

export default Component;
