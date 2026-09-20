import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9xv_7bqt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q9xv_7bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:lightning-outline"} {...others} />);
}

export default Component;
