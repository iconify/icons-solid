import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt2bel8xo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt2bel8xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:certificate-star"} {...others} />);
}

export default Component;
