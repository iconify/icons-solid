import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsgn4rbxy.css';
import '../../css/e/ekrijjhme.css';
import '../../css/c/cjb77fbnb.css';
import '../../css/v/vesx85bdo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fsgn4rbxy"/><path class="ekrijjhme"/><path class="cjb77fbnb"/><path class="vesx85bdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:french-fries"} {...others} />);
}

export default Component;
