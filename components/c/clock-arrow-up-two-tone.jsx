import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2yirbl_t.css';
import '../../css/q/qmklvzoqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p2yirbl_t"/><path class="qmklvzoqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-arrow-up-two-tone"} {...others} />);
}

export default Component;
