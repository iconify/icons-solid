import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5_ix3xhi.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="u5_ix3xhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:unreal-engine"} {...others} />);
}

export default Component;
