import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zsrqj7bec.css';
import '../../css/a/aw9205bus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zsrqj7bec"/><path class="aw9205bus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-question"} {...others} />);
}

export default Component;
