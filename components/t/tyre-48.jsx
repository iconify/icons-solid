import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zen2agbyu.css';
import '../../css/r/r_a_juvfe.css';
import '../../css/i/i5yaabj1z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zen2agbyu"/><path class="r_a_juvfe"/><path class="i5yaabj1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tyre-48"} {...others} />);
}

export default Component;
