import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8_j8s5yy.css';
import '../../css/y/y9k2wv5xs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h8_j8s5yy"/><rect class="y9k2wv5xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cinema"} {...others} />);
}

export default Component;
