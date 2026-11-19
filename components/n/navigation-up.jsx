import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brnxaebzu.css';
import '../../css/i/i9f7aszho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="brnxaebzu"/><path class="i9f7aszho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:navigation-up"} {...others} />);
}

export default Component;
