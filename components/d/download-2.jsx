import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0o962bep.css';
import '../../css/t/tfojvx0de.css';
import '../../css/b/bzvy1kbvb.css';
import '../../css/k/kzmcnwrsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p0o962bep"/><path class="tfojvx0de"/><path class="bzvy1kbvb"/><path class="kzmcnwrsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:download-2"} {...others} />);
}

export default Component;
