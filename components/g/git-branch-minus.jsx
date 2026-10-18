import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_vniuz2r.css';
import '../../css/a/a048ssbll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e_vniuz2r"/><path class="a048ssbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-branch-minus"} {...others} />);
}

export default Component;
