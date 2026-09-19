import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ed7fvnb1p.css';
import '../../css/m/m6xzm-jkq.css';

const viewBox = {"width":16,"height":17};
const content = `<g class="n1lsf0bnc"><path class="ed7fvnb1p"/><path class="m6xzm-jkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sign-in"} {...others} />);
}

export default Component;
