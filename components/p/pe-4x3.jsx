import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhcjeybja.css';
import '../../css/o/o9ffdfb9u.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="dhcjeybja"/><path class="o9ffdfb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pe-4x3"} {...others} />);
}

export default Component;
