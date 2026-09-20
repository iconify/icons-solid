import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju64m7nre.css';
import '../../css/g/gm7gmzfit.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ju64m7nre"/><path class="gm7gmzfit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ticket"} {...others} />);
}

export default Component;
