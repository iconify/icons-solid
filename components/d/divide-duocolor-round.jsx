import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-z3qw_6i.css';
import '../../css/v/vslz5yb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z-z3qw_6i"/><path class="vslz5yb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divide-duocolor-round"} {...others} />);
}

export default Component;
