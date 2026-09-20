import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m1-m3z7-f.css';
import '../../css/t/t22qv0bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m1-m3z7-f"/><path class="t22qv0bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:karate"} {...others} />);
}

export default Component;
