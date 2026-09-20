import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drhwmzukw.css';
import '../../css/n/noii36_6j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="drhwmzukw"/><path class="noii36_6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:pin-slash-16"} {...others} />);
}

export default Component;
