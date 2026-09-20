import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r_i1pf3uq.css';
import '../../css/u/u-0851bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r_i1pf3uq"/><path class="u-0851bxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:fish-off"} {...others} />);
}

export default Component;
