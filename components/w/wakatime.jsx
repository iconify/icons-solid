import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2afm7wxp.css';
import '../../css/h/h63osy3wv.css';

const viewBox = {"width":340,"height":340};
const content = `<g class="ft5dv1b6b"><path class="z2afm7wxp"/><path class="h63osy3wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:wakatime"} {...others} />);
}

export default Component;
