import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bag5a7bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bag5a7bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:user-multiple-minus-outline"} {...others} />);
}

export default Component;
