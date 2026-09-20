import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9lr1rbzg.css';
import '../../css/y/yp25-fb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z9lr1rbzg"/><path class="yp25-fb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:easel-fill"} {...others} />);
}

export default Component;
