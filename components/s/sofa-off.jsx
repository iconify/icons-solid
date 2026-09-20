import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f-xerv96l.css';
import '../../css/r/rzpiqbc5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f-xerv96l"/><path class="rzpiqbc5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sofa-off"} {...others} />);
}

export default Component;
