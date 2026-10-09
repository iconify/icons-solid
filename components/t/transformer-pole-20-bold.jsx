import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qielwupdx.css';
import '../../css/x/x7x2mcb9a.css';
import '../../css/l/l7htvzbng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qielwupdx"/><path class="x7x2mcb9a"/><path class="l7htvzbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-pole-20-bold"} {...others} />);
}

export default Component;
