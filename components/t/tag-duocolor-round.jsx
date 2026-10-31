import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-7__ob0f.css';
import '../../css/a/a9m3p5bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a-7__ob0f"/><path class="a9m3p5bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tag-duocolor-round"} {...others} />);
}

export default Component;
