import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gks4ctv1n.css';
import '../../css/m/mk5o0v1xb.css';
import '../../css/s/sua3pvbtp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gks4ctv1n"/><path class="mk5o0v1xb"/><path class="sua3pvbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:overview"} {...others} />);
}

export default Component;
