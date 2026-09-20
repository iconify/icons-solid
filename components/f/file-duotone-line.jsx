import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5a3_uboz.css';
import '../../css/c/c2v7f4d8i.css';
import '../../css/b/bdly9ccqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d5a3_uboz"/><path class="c2v7f4d8i"/><path class="bdly9ccqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-duotone-line"} {...others} />);
}

export default Component;
