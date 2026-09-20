import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1qo0lbjs.css';
import '../../css/f/fcjq_rbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j1qo0lbjs"/><path class="fcjq_rbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-automation"} {...others} />);
}

export default Component;
