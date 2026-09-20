import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0sr2po0b.css';
import '../../css/r/rbmb9m21o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m0sr2po0b"/><path clip-rule="evenodd" class="rbmb9m21o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:face-smiling-expressive"} {...others} />);
}

export default Component;
