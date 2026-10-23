import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrua8-bic.css';
import '../../css/z/z4iwqzxda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lrua8-bic"/><path class="z4iwqzxda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:columns-3-cog"} {...others} />);
}

export default Component;
