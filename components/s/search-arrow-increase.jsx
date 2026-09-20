import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3z3755al.css';
import '../../css/d/ds-8-acby.css';
import '../../css/r/rgxzhgbhs.css';
import '../../css/r/r3p4kujve.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u3z3755al"/><path class="ds-8-acby"/><path class="rgxzhgbhs"/><path class="r3p4kujve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:search-arrow-increase"} {...others} />);
}

export default Component;
