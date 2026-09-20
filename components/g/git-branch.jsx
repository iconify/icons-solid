import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dsqgq5p5v.css';
import '../../css/k/kkq__jdeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dsqgq5p5v"/><path class="kkq__jdeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-branch"} {...others} />);
}

export default Component;
