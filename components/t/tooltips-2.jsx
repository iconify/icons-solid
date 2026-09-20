import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvne9bckp.css';
import '../../css/b/bb399mb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qvne9bckp"/><path class="bb399mb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:tooltips-2"} {...others} />);
}

export default Component;
