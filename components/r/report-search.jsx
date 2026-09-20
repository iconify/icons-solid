import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m6frcdcld.css';
import '../../css/j/jvpy_eavk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m6frcdcld"/><path class="jvpy_eavk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:report-search"} {...others} />);
}

export default Component;
