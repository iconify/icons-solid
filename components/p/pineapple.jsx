import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w52p69j0s.css';
import '../../css/g/gka2riira.css';
import '../../css/t/tt5riew3g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w52p69j0s"/><path class="gka2riira"/><path class="tt5riew3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pineapple"} {...others} />);
}

export default Component;
