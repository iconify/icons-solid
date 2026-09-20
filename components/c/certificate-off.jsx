import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pyif9ibav.css';
import '../../css/p/pek5b3bur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pyif9ibav"/><path class="pek5b3bur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:certificate-off"} {...others} />);
}

export default Component;
