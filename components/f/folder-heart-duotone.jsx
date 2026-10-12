import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crnkz0bag.css';
import '../../css/b/bwusxd8bo.css';
import '../../css/d/d4hr9gupe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="crnkz0bag"/><path class="bwusxd8bo"/><path class="d4hr9gupe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-heart-duotone"} {...others} />);
}

export default Component;
