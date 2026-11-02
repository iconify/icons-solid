import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a6nhw7byy.css';
import '../../css/g/gl0peof1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="a6nhw7byy"/><path class="gl0peof1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-minus"} {...others} />);
}

export default Component;
