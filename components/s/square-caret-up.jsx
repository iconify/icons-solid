import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so504u5nq.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="so504u5nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:square-caret-up"} {...others} />);
}

export default Component;
