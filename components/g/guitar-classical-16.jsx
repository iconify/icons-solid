import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1cd9e3yd.css';
import '../../css/l/lsqebab9b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b1cd9e3yd"/><path class="lsqebab9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:guitar-classical-16"} {...others} />);
}

export default Component;
