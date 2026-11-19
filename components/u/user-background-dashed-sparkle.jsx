import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjzv0-_9f.css';
import '../../css/e/ektua-b0m.css';
import '../../css/q/qk1z2_-4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cjzv0-_9f"/><path class="ektua-b0m"/><path class="qk1z2_-4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-dashed-sparkle"} {...others} />);
}

export default Component;
