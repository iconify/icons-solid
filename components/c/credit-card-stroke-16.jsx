import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qst2e4_nj.css';
import '../../css/w/w7a4y5boz.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="qst2e4_nj"/><path class="w7a4y5boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:credit-card-stroke-16"} {...others} />);
}

export default Component;
