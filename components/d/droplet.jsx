import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xl3pm32wj.css';
import '../../css/s/sifom2_ld.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="xl3pm32wj"/><path class="sifom2_ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:droplet"} {...others} />);
}

export default Component;
