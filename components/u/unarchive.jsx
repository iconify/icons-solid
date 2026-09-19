import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4wb5_did.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k4wb5_did"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:unarchive"} {...others} />);
}

export default Component;
