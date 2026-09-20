import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vv6z0bc8u.css';
import '../../css/i/iup9trbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="vv6z0bc8u"/><path class="iup9trbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mouse"} {...others} />);
}

export default Component;
