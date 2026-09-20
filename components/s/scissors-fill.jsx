import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1q46ybnx.css';
import '../../css/f/f6_hb46os.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x1q46ybnx"/><path class="f6_hb46os"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-fill"} {...others} />);
}

export default Component;
