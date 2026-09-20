import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljsqm-boc.css';
import '../../css/d/dklea-b1y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ljsqm-boc"/><path class="dklea-b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:guitar-folk-16"} {...others} />);
}

export default Component;
