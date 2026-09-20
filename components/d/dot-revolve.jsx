import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnis27-yq.css';
import '../../css/l/l7-dtibrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnis27-yq"/><circle class="l7-dtibrc"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></circle>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"svg-spinners:dot-revolve"} {...others} />);
}

export default Component;
