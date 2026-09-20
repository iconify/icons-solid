import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8c66b0jw.css';
import '../../css/v/vks9v3nji.css';
import '../../css/h/hp_8as9fa.css';
import '../../css/k/kwqw2qbtv.css';
import '../../css/e/en_9zqu5e.css';
import '../../css/v/v8th3bb-w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g8c66b0jw"/><path class="vks9v3nji"/><path class="hp_8as9fa"/><path class="kwqw2qbtv"/><path class="en_9zqu5e"/><path class="v8th3bb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:landscape-2"} {...others} />);
}

export default Component;
