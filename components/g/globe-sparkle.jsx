import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qee830rbs.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/q/qwp7vcb_l.css';
import '../../css/b/b4w4vubmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qee830rbs"/><path class="u5h8llb9a"/><path class="qwp7vcb_l"/><path class="b4w4vubmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-sparkle"} {...others} />);
}

export default Component;
