import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9uu54b7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9uu54b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:plus-bold"} {...others} />);
}

export default Component;
