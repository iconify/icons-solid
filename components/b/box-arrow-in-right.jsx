import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uhmdhgbwz.css';
import '../../css/f/fr8qrkb5s.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="uhmdhgbwz"/><path class="fr8qrkb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-in-right"} {...others} />);
}

export default Component;
