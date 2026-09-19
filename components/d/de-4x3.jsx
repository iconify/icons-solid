import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4l6eub2n.css';
import '../../css/c/c8caqzgai.css';
import '../../css/u/ug-lui25o.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="m4l6eub2n"/><path class="c8caqzgai"/><path class="ug-lui25o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:de-4x3"} {...others} />);
}

export default Component;
