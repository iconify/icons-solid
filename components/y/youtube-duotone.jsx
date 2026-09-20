import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ahwjz2bvl.css';
import '../../css/k/kuvr1btsk.css';
import '../../css/s/srl0bo8rs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ahwjz2bvl"/><path class="kuvr1btsk"/><path class="srl0bo8rs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:youtube-duotone"} {...others} />);
}

export default Component;
