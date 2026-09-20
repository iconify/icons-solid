import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hkq4kbb3n.css';
import '../../css/x/xmbylcbap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hkq4kbb3n"/><path class="xmbylcbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:rotate-ccw-clock"} {...others} />);
}

export default Component;
