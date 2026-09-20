import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dm954r2pk.css';
import '../../css/g/gggm-8eec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dm954r2pk"/><path class="gggm-8eec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:resize"} {...others} />);
}

export default Component;
