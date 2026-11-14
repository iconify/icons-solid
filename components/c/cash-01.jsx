import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/of4w63b2b.css';
import '../../css/o/o-kwjpbjy.css';
import '../../css/i/iulpltu0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="of4w63b2b"/><path class="o-kwjpbjy"/><path class="iulpltu0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cash-01"} {...others} />);
}

export default Component;
