import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5sohkb2h.css';
import '../../css/m/m8wl9ob1x.css';
import '../../css/x/xydhk3k_c.css';
import '../../css/a/afrf62bik.css';
import '../../css/x/x-gbqab0e.css';
import '../../css/h/hznntibns.css';
import '../../css/q/q1_ki4rbe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f5sohkb2h"/><path class="m8wl9ob1x"/><path class="xydhk3k_c"/><path class="afrf62bik"/><path class="x-gbqab0e"/><path class="hznntibns"/><path class="q1_ki4rbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:curry-rice"} {...others} />);
}

export default Component;
