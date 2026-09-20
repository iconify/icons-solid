import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6ktrib3l.css';
import '../../css/f/fxsetnwht.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k6ktrib3l"/><path class="fxsetnwht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:link-16"} {...others} />);
}

export default Component;
