import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0h-jeb0r.css';
import '../../css/g/govk1yb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o0h-jeb0r"/><path class="govk1yb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-drive"} {...others} />);
}

export default Component;
