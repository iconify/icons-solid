import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf30xdl9z.css';
import '../../css/a/a78bxr7sa.css';
import '../../css/w/wiv5s7bjv.css';
import '../../css/k/kddbe-uhd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hf30xdl9z"/><path clip-rule="evenodd" class="a78bxr7sa"/><path class="wiv5s7bjv"/><path class="kddbe-uhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:youtube"} {...others} />);
}

export default Component;
