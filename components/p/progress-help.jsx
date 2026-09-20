import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tbojnipdz.css';
import '../../css/a/ag4zfg7zk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tbojnipdz"/><path class="ag4zfg7zk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:progress-help"} {...others} />);
}

export default Component;
