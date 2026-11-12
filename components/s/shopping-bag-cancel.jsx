import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/urvrhpb5j.css';
import '../../css/w/wm6c_fxke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="urvrhpb5j"/><path class="wm6c_fxke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-cancel"} {...others} />);
}

export default Component;
