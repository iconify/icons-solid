import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et6kkkb-z.css';
import '../../css/t/tuf-7ccwj.css';
import '../../css/m/mppt_5b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="et6kkkb-z"/><path class="tuf-7ccwj"/><path class="mppt_5b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-heart"} {...others} />);
}

export default Component;
