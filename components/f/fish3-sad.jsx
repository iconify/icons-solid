import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecg4d0bin.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ecg4d0bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:fish3-sad"} {...others} />);
}

export default Component;
