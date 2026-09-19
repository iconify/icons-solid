import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8hxk182u.css';
import '../../css/f/fv93obmie.css';
import '../../css/c/c9tst5bhp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n8hxk182u"/><path clip-rule="evenodd" class="fv93obmie"/><path class="c9tst5bhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:transgender-flag"} {...others} />);
}

export default Component;
