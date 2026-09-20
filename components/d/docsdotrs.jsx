import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frrvw0nro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frrvw0nro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:docsdotrs"} {...others} />);
}

export default Component;
