import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4oba6bzs.css';
import '../../css/q/qofjcfbxt.css';
import '../../css/l/lts-c-4mj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4oba6bzs"/><path class="qofjcfbxt"/><path class="lts-c-4mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-dashed-sparkle"} {...others} />);
}

export default Component;
