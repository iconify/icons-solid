import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni1ex1sbr.css';
import '../../css/l/ldpo4n3qb.css';
import '../../css/u/ubtuxebtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ni1ex1sbr"/><path class="ldpo4n3qb"/><path class="ubtuxebtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-book-open"} {...others} />);
}

export default Component;
