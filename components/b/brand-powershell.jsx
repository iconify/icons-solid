import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p00okzb1b.css';
import '../../css/s/s0thzbb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p00okzb1b"/><path class="s0thzbb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-powershell"} {...others} />);
}

export default Component;
