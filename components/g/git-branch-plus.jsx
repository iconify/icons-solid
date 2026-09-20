import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpza59blp.css';
import '../../css/u/ufzy91bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cpza59blp"/><path class="ufzy91bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-branch-plus"} {...others} />);
}

export default Component;
