import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pll1c7hqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pll1c7hqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:currency-exchange"} {...others} />);
}

export default Component;
