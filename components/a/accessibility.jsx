import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ez3mxxrfh.css';
import '../../css/h/h2lyp6b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ez3mxxrfh"/><path class="h2lyp6b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:accessibility"} {...others} />);
}

export default Component;
