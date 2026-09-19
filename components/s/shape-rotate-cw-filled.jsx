import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcl2e-hth.css';
import '../../css/d/dnt6pzbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcl2e-hth"/><path class="dnt6pzbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-rotate-cw-filled"} {...others} />);
}

export default Component;
