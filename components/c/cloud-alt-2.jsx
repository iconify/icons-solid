import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv3hw0rzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv3hw0rzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cloud-alt-2"} {...others} />);
}

export default Component;
