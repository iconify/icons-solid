import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-rc11bkf.css';
import '../../css/g/gtsg3ccob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s-rc11bkf"/><path class="gtsg3ccob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-dashed-full-two-tone"} {...others} />);
}

export default Component;
