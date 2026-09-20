import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pawrjyblj.css';
import '../../css/r/r1xyc4b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pawrjyblj"/><path class="r1xyc4b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-down"} {...others} />);
}

export default Component;
