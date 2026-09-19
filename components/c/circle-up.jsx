import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awq8skfug.css';
import '../../css/o/o-u5nubvx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="awq8skfug"/><path class="o-u5nubvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:circle-up"} {...others} />);
}

export default Component;
