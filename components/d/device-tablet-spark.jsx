import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pzrcucb8m.css';
import '../../css/t/t5ncoybzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pzrcucb8m"/><path class="t5ncoybzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-spark"} {...others} />);
}

export default Component;
