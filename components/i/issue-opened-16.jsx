import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixj357rxr.css';
import '../../css/z/zauqecc_x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ixj357rxr"/><path class="zauqecc_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-opened-16"} {...others} />);
}

export default Component;
