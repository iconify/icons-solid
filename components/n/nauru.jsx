import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpfeuxjdz.css';
import '../../css/j/j33ca7bac.css';
import '../../css/e/et9g0gkeb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="cpfeuxjdz"/><path class="j33ca7bac"/><path class="et9g0gkeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:nauru"} {...others} />);
}

export default Component;
