import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai6wcvbfj.css';
import '../../css/f/fhh8osb-p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ai6wcvbfj"/><path class="fhh8osb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:users-solid"} {...others} />);
}

export default Component;
