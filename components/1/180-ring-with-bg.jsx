import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnis27-yq.css';
import '../../css/y/yp09mjbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnis27-yq"/><path class="yp09mjbvu"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"svg-spinners:180-ring-with-bg"} {...others} />);
}

export default Component;
