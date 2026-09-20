import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kxl3k0b4w.css';
import '../../css/o/o-qq-c8-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kxl3k0b4w"/><path class="o-qq-c8-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mic-fill"} {...others} />);
}

export default Component;
