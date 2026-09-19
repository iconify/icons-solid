import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o7rwo4bzo.css';
import '../../css/a/av9mmacgv.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="o7rwo4bzo"/><path class="av9mmacgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:paypal"} {...others} />);
}

export default Component;
