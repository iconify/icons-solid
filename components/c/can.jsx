import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yhtx0zh1i.css';
import '../../css/r/rud1q9bap.css';
import '../../css/h/h7u1xzbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yhtx0zh1i"/><path class="rud1q9bap"/><path class="h7u1xzbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:can"} {...others} />);
}

export default Component;
