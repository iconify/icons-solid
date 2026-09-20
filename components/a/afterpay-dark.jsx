import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy37wkf-y.css';

const viewBox = {"width":24,"height":23};
const content = `<path class="wy37wkf-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:afterpay-dark"} {...others} />);
}

export default Component;
