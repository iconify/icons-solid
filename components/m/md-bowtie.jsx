import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njc6web4n.css';
import '../../css/i/iqll_cgam.css';
import '../../css/i/i5ggx7ltg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="njc6web4n"/><path class="iqll_cgam"/><path class="i5ggx7ltg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-bowtie"} {...others} />);
}

export default Component;
