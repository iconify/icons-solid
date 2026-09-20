import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6d6n-_oa.css';
import '../../css/u/usc_ctb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="r6d6n-_oa"/><path class="usc_ctb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tablet-smartphone"} {...others} />);
}

export default Component;
