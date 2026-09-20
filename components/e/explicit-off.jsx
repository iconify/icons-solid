import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a5rkt8uxw.css';
import '../../css/k/k211u6byz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a5rkt8uxw"/><path class="k211u6byz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:explicit-off"} {...others} />);
}

export default Component;
