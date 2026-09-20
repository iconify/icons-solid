import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulw8nvupj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulw8nvupj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hand-pointing-left"} {...others} />);
}

export default Component;
