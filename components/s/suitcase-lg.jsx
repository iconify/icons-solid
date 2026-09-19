import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i165b5bqk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i165b5bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:suitcase-lg"} {...others} />);
}

export default Component;
