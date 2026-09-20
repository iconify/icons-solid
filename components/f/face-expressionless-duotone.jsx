import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t8drw368i.css';
import '../../css/k/kdpo4ac2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t8drw368i"/><path class="kdpo4ac2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:face-expressionless-duotone"} {...others} />);
}

export default Component;
