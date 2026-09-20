import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz6ijjbgq.css';
import '../../css/q/qj14hob_f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rz6ijjbgq"/><path class="qj14hob_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:redeploy"} {...others} />);
}

export default Component;
