import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgssiu7uc.css';
import '../../css/w/wh80adswx.css';
import '../../css/v/vysufwb5l.css';
import '../../css/e/e49-dr4mf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kgssiu7uc"/><path class="wh80adswx"/><path class="vysufwb5l"/><path class="e49-dr4mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:template-sparkle"} {...others} />);
}

export default Component;
