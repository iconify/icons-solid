import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqdps7hvt.css';
import '../../css/x/xvpm0wbmd.css';
import '../../css/b/bivz2wbdu.css';
import '../../css/e/euyl8dt7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqdps7hvt"/><path class="xvpm0wbmd"/><path class="bivz2wbdu"/><path clip-rule="evenodd" class="euyl8dt7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:door-open-duotone"} {...others} />);
}

export default Component;
