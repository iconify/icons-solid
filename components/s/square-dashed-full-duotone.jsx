import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umern85ks.css';
import '../../css/g/gtsg3ccob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="umern85ks"/><path class="gtsg3ccob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-dashed-full-duotone"} {...others} />);
}

export default Component;
