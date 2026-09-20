import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hknxp1bfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hknxp1bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bitcoin-sv"} {...others} />);
}

export default Component;
