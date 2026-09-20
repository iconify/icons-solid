import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zm2u1zbyi.css';
import '../../css/y/y5kc5-bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zm2u1zbyi"/><circle class="y5kc5-bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tags"} {...others} />);
}

export default Component;
