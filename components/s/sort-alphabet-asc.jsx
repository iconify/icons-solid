import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7d196oys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7d196oys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sort-alphabet-asc"} {...others} />);
}

export default Component;
