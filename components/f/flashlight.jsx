import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n86fehjba.css';
import '../../css/p/pp5zsyq_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n86fehjba"/><ellipse class="pp5zsyq_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:flashlight"} {...others} />);
}

export default Component;
