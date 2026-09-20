import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ppdzzsb6b.css';
import '../../css/e/e19xuo0lv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ppdzzsb6b"/><path class="e19xuo0lv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:eye-bolt"} {...others} />);
}

export default Component;
