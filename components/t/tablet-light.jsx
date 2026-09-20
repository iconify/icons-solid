import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y39lupb1i.css';
import '../../css/j/j8_7y3biq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="y39lupb1i"/><path class="j8_7y3biq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:tablet-light"} {...others} />);
}

export default Component;
