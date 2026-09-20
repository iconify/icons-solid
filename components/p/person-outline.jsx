import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql33l8pgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ql33l8pgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:person-outline"} {...others} />);
}

export default Component;
