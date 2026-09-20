import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0kuaq79g.css';
import '../../css/b/bkppracoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s0kuaq79g"/><path class="bkppracoq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-wink"} {...others} />);
}

export default Component;
