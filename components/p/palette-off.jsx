import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjhyt8fvt.css';
import '../../css/k/kyg223bro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zjhyt8fvt"/><path class="kyg223bro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:palette-off"} {...others} />);
}

export default Component;
