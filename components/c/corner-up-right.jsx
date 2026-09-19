import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kjr9bcd_h.css';
import '../../css/x/xm9pk0bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kjr9bcd_h"/><path class="xm9pk0bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:corner-up-right"} {...others} />);
}

export default Component;
