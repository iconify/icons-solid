import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lruj0drqg.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="lruj0drqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:circle-grid-3x3"} {...others} />);
}

export default Component;
