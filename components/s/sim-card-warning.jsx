import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6i3uccox.css';
import '../../css/e/e8fdbvbtx.css';
import '../../css/v/vv2alzb_p.css';
import '../../css/a/ap4acab4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x6i3uccox"/><path class="e8fdbvbtx"/><path class="vv2alzb_p"/><path class="ap4acab4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sim-card-warning"} {...others} />);
}

export default Component;
