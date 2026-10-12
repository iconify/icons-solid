import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3ks6kk1v.css';
import '../../css/k/k09hkxgwo.css';
import '../../css/a/asyru8bos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o3ks6kk1v"/><path class="k09hkxgwo"/><path class="asyru8bos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-reader-duotone"} {...others} />);
}

export default Component;
