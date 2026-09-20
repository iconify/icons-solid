import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy9w8ibxy.css';
import '../../css/a/a_0finyys.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qy9w8ibxy"/><path class="a_0finyys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:bring-to-front-16"} {...others} />);
}

export default Component;
