import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p77bzab7z.css';
import '../../css/a/atybejjim.css';
import '../../css/m/my1mcvbnq.css';
import '../../css/l/ll6wsubvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p77bzab7z"/><path class="atybejjim"/><path class="my1mcvbnq"/><path class="ll6wsubvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:paragraphs-indent-last-line"} {...others} />);
}

export default Component;
