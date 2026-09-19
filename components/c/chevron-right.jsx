import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9n72kbnl.css';

const viewBox = {"width":1088,"height":1664};
const content = `<g transform="translate(1088 0) scale(-1 1)"><path class="n9n72kbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:chevron-right"} {...others} />);
}

export default Component;
