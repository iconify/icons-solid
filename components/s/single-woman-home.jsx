import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbxvhyb9h.css';
import '../../css/l/l-c3p6b9h.css';
import '../../css/e/edxtuwbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dbxvhyb9h"/><path class="l-c3p6b9h"/><path class="edxtuwbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-woman-home"} {...others} />);
}

export default Component;
