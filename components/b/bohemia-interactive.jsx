import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sicp8y6ma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sicp8y6ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:bohemia-interactive"} {...others} />);
}

export default Component;
