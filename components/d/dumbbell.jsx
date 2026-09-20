import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tku_61b7b.css';
import '../../css/g/gmhq_ybdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tku_61b7b"/><path class="gmhq_ybdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dumbbell"} {...others} />);
}

export default Component;
