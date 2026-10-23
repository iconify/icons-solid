import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_33vdbgo.css';
import '../../css/z/z6m37ybgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a_33vdbgo"/><path class="z6m37ybgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-merge"} {...others} />);
}

export default Component;
