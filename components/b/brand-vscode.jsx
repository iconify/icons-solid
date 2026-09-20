import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owi87abms.css';
import '../../css/d/d4wej39qt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="owi87abms"/><path class="d4wej39qt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-vscode"} {...others} />);
}

export default Component;
