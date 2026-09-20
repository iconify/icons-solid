import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdrja8e0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdrja8e0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:arrow-down-24"} {...others} />);
}

export default Component;
