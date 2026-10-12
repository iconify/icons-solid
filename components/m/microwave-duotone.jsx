import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp9fgvh8r.css';
import '../../css/s/s3fhr-boy.css';
import '../../css/n/numid2z_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lp9fgvh8r"/><path class="s3fhr-boy"/><path class="numid2z_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:microwave-duotone"} {...others} />);
}

export default Component;
