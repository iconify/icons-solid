import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lqwj3rblg.css';
import '../../css/o/oza9rwbkn.css';
import '../../css/i/i1-6r6e7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lqwj3rblg"/><path class="oza9rwbkn"/><path class="i1-6r6e7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stack-front"} {...others} />);
}

export default Component;
