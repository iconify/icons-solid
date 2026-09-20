import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh7upse8n.css';
import '../../css/a/a71r-q15w.css';
import '../../css/s/scfx2467n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rh7upse8n"/><path class="a71r-q15w"/><path class="scfx2467n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:keyboard"} {...others} />);
}

export default Component;
