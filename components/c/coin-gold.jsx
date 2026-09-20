import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nof6d3bsw.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="nof6d3bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:coin-gold"} {...others} />);
}

export default Component;
