import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/secz02b6f.css';
import '../../css/f/fv08zpbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="secz02b6f"/><path class="fv08zpbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-search"} {...others} />);
}

export default Component;
