import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/br9bb55fn.css';
import '../../css/c/c1rvh-buj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="br9bb55fn"/><path class="c1rvh-buj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:function"} {...others} />);
}

export default Component;
