import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-pouni2x.css';
import '../../css/y/ysrgwzb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r-pouni2x"/><path class="ysrgwzb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mountain-off"} {...others} />);
}

export default Component;
