import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k327wib4f.css';
import '../../css/t/t6tpgmbdb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k327wib4f"/><path class="t6tpgmbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:fork-repo"} {...others} />);
}

export default Component;
