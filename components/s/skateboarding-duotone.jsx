import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1hme5bwb.css';
import '../../css/l/lm_nrwi7b.css';
import '../../css/b/b9a6538vj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s1hme5bwb"/><path class="lm_nrwi7b"/><path class="b9a6538vj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skateboarding-duotone"} {...others} />);
}

export default Component;
