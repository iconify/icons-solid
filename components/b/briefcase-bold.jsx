import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yw3246bko.css';
import '../../css/t/t2r54b8lm.css';
import '../../css/n/nr94pie1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="yw3246bko"/><path class="t2r54b8lm"/><path class="nr94pie1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:briefcase-bold"} {...others} />);
}

export default Component;
