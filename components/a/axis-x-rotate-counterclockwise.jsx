import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak8qh_69j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ak8qh_69j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:axis-x-rotate-counterclockwise"} {...others} />);
}

export default Component;
