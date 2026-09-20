import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lhagugp9o.css';
import '../../css/j/j9pc2hj6u.css';
import '../../css/q/qqau8en3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lhagugp9o"/><path class="j9pc2hj6u"/><path class="qqau8en3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bus-off"} {...others} />);
}

export default Component;
