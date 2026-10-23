import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnzmjmmxh.css';
import '../../css/e/ebwn4pbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tnzmjmmxh"/><path class="ebwn4pbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-arrow-up-left"} {...others} />);
}

export default Component;
