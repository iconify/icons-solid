import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/eihgcyb3b.css';
import '../../css/t/tyd3scdvj.css';
import '../../css/i/iqufm3bel.css';
import '../../css/q/qvz-3qbhg.css';
import '../../css/e/e5lu4m7ut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="eihgcyb3b"/><path class="tyd3scdvj"/><path class="iqufm3bel"/><path class="qvz-3qbhg"/><path class="e5lu4m7ut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:artificial-intelligence-brain-chip"} {...others} />);
}

export default Component;
